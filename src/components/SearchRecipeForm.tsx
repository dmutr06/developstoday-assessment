"use client";

import { CUISINE_VALUES, isCuisineString } from "@/types/cuisine";
import Button from "./ui/Button";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { generateSearchParams } from "@/lib/common";

export default function SearchRecipeForm() {
    const [query, setQuery] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [maxReadyTime, setMaxReadyTime] = useState("");

    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!canSubmit()) return;

        const params = generateSearchParams({
            query,
            cuisine: isCuisineString(cuisine) ? cuisine : undefined,
            maxReadyTime: maxReadyTime ? Number(maxReadyTime) : undefined,
        });

        router.push(`/recipes?${params.toString()}`);
    };

    const canSubmit = () => {
        return query || cuisine || maxReadyTime;
    };

    return (
        <form onSubmit={handleSubmit} className="m-auto flex flex-col gap-4 p-6 rounded-lg bg-secondary  w-full md:w-lg lg:w-xl min-h-62">
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Type what you want" className="border-none outline-none bg-white p-2" />
            <div>
                <label htmlFor="cuisine" className="block mb-2">Cuisine</label>
                <select value={cuisine} onChange={(e) => setCuisine(e.target.value)} name="cuisine" className="bg-white p-2 w-full">
                    <option value="">Any</option>
                    {CUISINE_VALUES.map(cuisine => <option key={cuisine} value={cuisine}>{cuisine}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="maxReadyTime" className="block mb-2">Max Ready Time</label>
                <input value={maxReadyTime} onChange={(e) => setMaxReadyTime(e.target.value)} type="number" className="border-none outline-none bg-white p-2 w-full" />
            </div>
            <Button disabled={!canSubmit()} type="submit" className="mt-4">Next</Button>
        </form>
    ); 
}
