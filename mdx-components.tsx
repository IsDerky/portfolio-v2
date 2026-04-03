import type { MDXComponents } from 'mdx/types';
import { poppins } from '@/lib/fonts';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className={`${poppins.className} text-3xl font-semibold text-white mb-4`}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className={`${poppins.className} text-2xl font-semibold text-white mb-3 mt-8`}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className={`${poppins.className} text-xl font-medium text-white mb-2 mt-6`}>{children}</h3>
    ),
    p: ({ children }) => (
      <p className={`${poppins.className} text-gray-300 leading-relaxed mb-4`}>{children}</p>
    ),
    ul: ({ children }) => (
      <ul className={`${poppins.className} text-gray-300 list-disc list-inside mb-4 space-y-1`}>{children}</ul>
    ),
    li: ({ children }) => (
      <li className="text-gray-300">{children}</li>
    ),
    code: ({ children }) => (
      <code className="bg-white/10 text-white text-sm px-1.5 py-0.5 rounded font-mono">{children}</code>
    ),
    ...components,
  };
}
