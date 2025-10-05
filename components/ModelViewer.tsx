'use client';

import { FC, Suspense, useLayoutEffect, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useProgress, Html } from '@react-three/drei';
import * as THREE from 'three';

export interface ViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  onModelLoaded?: () => void;
}

const Loader: FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        color: 'white',
        fontFamily: 'system-ui',
        fontSize: '14px',
        background: 'rgba(0,0,0,0.7)',
        padding: '10px',
        borderRadius: '5px'
      }}>
        {Math.round(progress)}%
      </div>
    </Html>
  );
};

interface ModelProps {
  url: string;
  autoRotate: boolean;
  autoRotateSpeed: number;
  onLoaded?: () => void;
}

const Model: FC<ModelProps> = ({ url, autoRotate, autoRotateSpeed, onLoaded }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  useLayoutEffect(() => {
    if (!scene || !groupRef.current) return;

    // Limpiar grupo
    while (groupRef.current.children.length > 0) {
      groupRef.current.remove(groupRef.current.children[0]);
    }

    // Clonar y añadir el modelo
    const model = scene.clone();
    groupRef.current.add(model);

    // Calcular bounding box y centrar
    const box = new THREE.Box3().setFromObject(groupRef.current);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    // Centrar el modelo
    model.position.sub(center);

    // Escalar para que quepa en la vista
    if (maxDim > 0) {
      const scale = 2 / maxDim;
      groupRef.current.scale.setScalar(scale);
    }

    // Configurar materiales
    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        if (mesh.material) {
          (mesh.material as THREE.Material).needsUpdate = true;
        }
      }
    });

    console.log('Modelo cargado');
    onLoaded?.();
  }, [scene, onLoaded]);

  useFrame((state) => {
    if (!groupRef.current || !autoRotate) return;
    groupRef.current.rotation.y += autoRotateSpeed * state.clock.getDelta();
  });

  return <group ref={groupRef} />;
};

const ModelViewer: FC<ViewerProps> = ({
  url,
  width = 400,
  height = 400,
  defaultZoom = 3,
  minZoomDistance = 1,
  maxZoomDistance = 10,
  autoRotate = false,
  autoRotateSpeed = 1,
  onModelLoaded
}) => {

  // Precargar modelo si es GLB/GLTF
  useEffect(() => {
    useGLTF.preload(url);
  }, [url]);

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, defaultZoom],
          fov: 50,
          near: 0.1,
          far: 100
        }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Iluminación básica */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 2, 5]} intensity={0.5} />

        {/* Controles de órbita con zoom personalizado */}
        <OrbitControls
          enablePan={false}
          minDistance={minZoomDistance}
          maxDistance={maxZoomDistance}
          autoRotate={autoRotate}
          autoRotateSpeed={autoRotateSpeed}
        />

        <Suspense fallback={<Loader />}>
          <Model
            url={url}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
