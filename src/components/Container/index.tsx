import type { ReactNode } from "react";

type Prop={
    children:ReactNode;
    className?: string;
}
export default function Container({ children , className = "" }: Prop) {
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
}