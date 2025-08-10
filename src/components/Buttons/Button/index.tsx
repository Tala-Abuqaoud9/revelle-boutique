"use client";

import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import Link from "next/link";
import { Loader2 } from "lucide-react";

type Props = {
  label: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  label,
  href,
  variant = "primary",
  isLoading = false,
  disabled = false,
  icon,
  fullWidth = false,
  ...props
}: Props) {
  const baseClasses =
    "flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border border-black hover:bg-gray-100",
    outline: "border border-gray-500 text-gray-800 hover:bg-gray-100",
  };

  const finalClass = classNames(
    baseClasses,
    variants[variant],
    {
      "opacity-50 cursor-not-allowed": disabled || isLoading,
      "w-full": fullWidth,
    },
    props.className
  );

  if (href) {
    return (
      <Link href={href} className={finalClass}>
        {isLoading && <Loader2 className="animate-spin" size={18} />}
        {icon && !isLoading && icon}
        {label}
      </Link>
    );
  }

  return (
    <button className={finalClass} disabled={disabled || isLoading} {...props}>
      {isLoading && <Loader2 className="animate-spin" size={18} />}
      {icon && !isLoading && icon}
      {label}
    </button>
  );
}
