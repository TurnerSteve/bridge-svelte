// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }


// Simple classnames joiner, like 'clsx' or 'classnames'
export function cn(...args: (string | false | null | undefined)[]) {
  return args.filter(Boolean).join(' ');
}