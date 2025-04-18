import { apiService } from "@/lib/apiService";
import { notFound } from "next/navigation";


export default async function RecipeDetails({ id }: { id: string }) {
    const recipe = await apiService.getRecipe(id);

    if (!recipe) return notFound();

    return (
        <>
            <h2 className="text-2xl">{recipe.title}</h2>
            <div className="mt-2 text-xl">Recipe:</div>
            <ul className="">
                {recipe.extendedIngredients.map((ing, idx) => <li className="text-lg" key={idx}>{ing.name}</li>)}
            </ul>
        </>
    );
}
