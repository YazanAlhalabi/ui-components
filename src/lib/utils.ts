import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Viewport } from "../types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)) || undefined
}

export function getViewport(width: number): Viewport {
  if (width < 640) return "mobile"
  if (width < 1024) return "tablet"
  return "desktop"
}
