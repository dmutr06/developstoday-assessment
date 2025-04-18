"use client";

import GoBackButton from "@/components/GoBackButton";

export default function NotFound() {
    return (
        <div className="w-full h-full flex items-center justify-center flex-col text-2xl gap-4">
            <div>There is no recipe with such id</div>
            <GoBackButton />
        </div>
    );
}
