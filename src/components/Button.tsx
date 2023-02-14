import { cn } from '@/utils';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  variant?: "fill" | "text";
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export default function Button({ className, variant = "fill" , children, size = 'medium'}: Props) {
  return (
    <button
      type="button"
      className={cn(
        "block rounded-md focus:outline-none",
        [
          variant === "fill" && "bg-emerald-500 text-white shadow-sm hover:bg-emerald-700",
          variant === "text" && "bg-transparent text-emerald-500",
        ],
        [
          size === "small" && "py-1.5 px-3.5 text-xs",
          size === "medium" && "py-2.5 px-5 text-sm",
          size === "large" && "py-3 px-6"
        ],
        className
      )}
    >{children}</button>
  );
}
