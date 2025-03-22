import { cslx } from "cslx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(cslx(inputs));
}
