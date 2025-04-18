import GoBackButton from "@/components/GoBackButton";
import RecipeDetails from "@/components/RecipeDetails";
import Loading from "@/components/ui/Loading";
import { apiService } from "@/lib/apiService";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface RecipePageProps {
    params: Promise<{
        id: string,
    }>
}

export default async function RecipePage({ params  }: RecipePageProps) {
    const { id } = await params;
    const recipe = await apiService.getRecipe(id);

    if (!recipe) return notFound();

    return (
        <div className="h-full w-full flex items-center justify-center px-1">
            <div className="lg:w-3xl md:w-2xl w-full p-6 bg-secondary rounded-xl min-h-62 flex flex-col">
                <Suspense fallback={<Loading />}>
                    <RecipeDetails id={id} />
                </Suspense>
                <GoBackButton />
            </div>
        </div>
    ); 
}
