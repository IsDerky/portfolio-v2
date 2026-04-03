import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // Transpila los paquetes de Three.js para evitar problemas de SSR
  transpilePackages: ['@react-three/fiber', '@react-three/drei', 'three'],
  
  // Configuración de webpack para Three.js
  webpack: (config) => {
    // Excluir paquetes problemáticos que no son necesarios en el browser
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });

    // Configurar alias para evitar problemas de resolución de módulos
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm': 'three/examples/jsm',
    };

    return config;
  },

  // Optimizaciones de imágenes y recursos estáticos
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Configuración experimental para mejorar el rendimiento
  experimental: {
    optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei', 'framer-motion', 'lucide-react'],
  },

  // Headers para permitir la carga de modelos 3D
  async headers() {
    return [
      {
        source: '/models/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default withMDX(nextConfig);