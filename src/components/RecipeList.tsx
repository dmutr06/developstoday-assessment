import { apiService } from "@/lib/apiService";
import { isCuisineString } from "@/types/cuisine";
import { notFound, redirect } from "next/navigation";
import RecipeCard from "./RecipeCard";

interface RecipeListProps {
    query?: string,
    cuisine?: string,
    maxReadyTime?: string,
}

export default async function RecipeList({ query, cuisine, maxReadyTime }: RecipeListProps) {
    const recipes = await apiService.getRecipes({
        query,
        cuisine: cuisine && isCuisineString(cuisine) ? cuisine : undefined,
        maxReadyTime: maxReadyTime ? Number(maxReadyTime) : undefined,
    });

    if (!recipes) return redirect("/");
    if (recipes.length == 0) return notFound();

    return (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recipes.map(recipe => <li key={recipe.id}><RecipeCard recipe={recipe} /></li>)}
        </ul>
    );
}
