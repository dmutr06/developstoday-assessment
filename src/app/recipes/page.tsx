import RecipeList from "@/components/RecipeList";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

interface RecipesPageProps {
    searchParams: Promise<Record<string, string | undefined>>,
}

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
    const { query, cuisine, maxReadyTime } = await searchParams;

    return (
        <div className="p-4">
            <Suspense fallback={<Loading />}>
                <RecipeList query={query} cuisine={cuisine} maxReadyTime={maxReadyTime} />
            </Suspense>
        </div>
    );
}
