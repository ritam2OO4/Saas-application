import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { subjectsColors, voices } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const generatePastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70 + Math.random() * 9; // 80% - 100% saturation for vividness
  const lightness = 60 + Math.random() * 6;  // 60% - 75% lightness for brightness
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};



export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors] || generatePastelColor();
};