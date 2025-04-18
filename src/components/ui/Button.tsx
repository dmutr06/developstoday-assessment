"use client";

import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

// TODO: add more variants
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary",
    isLoading?: boolean,
}

const base = "px-4 py-2 rounded font-medium transition-colors duration-300 hover:cursor-pointer disabled:opacity:50 disabled:cursor-not-allowed border-3 border-transparent";

const variants = {
    primary: "bg-primary-100 text-white hover:bg-primary-200",
    secondary: "text-black border-primary-100! hover:bg-primary-100"
};

export default function Button({ children, variant = "primary", isLoading = false, disabled, className, ...props }: ButtonProps) {
    return (
        <button 
            className={clsx(base, variants[variant], className)}
            disabled={disabled || isLoading}
            {...props}
        >
            {children}
        </button>
    );
}
