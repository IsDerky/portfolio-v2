'use client';

import { HeartIcon } from 'lucide-animated';

interface Props {
  size?: number;
  className?: string;
}

export default function AnimatedHeart({ size, className }: Props) {
  return <HeartIcon size={size} className={className} />;
}
