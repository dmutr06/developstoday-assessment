"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

interface ErrorProps {
    error: Error,
    reset: () => void,
}

export default function Error({ reset }: ErrorProps) {
    const router = useRouter();
    return (
        <div className="w-full h-full flex items-center justify-center flex-col text-2xl gap-4">
            <h3>Something went wrong...</h3>
            <Button onClick={reset}>Try again</Button>
            <Button onClick={() => router.replace("/")}>Go home</Button>
        </div>
    );
}
