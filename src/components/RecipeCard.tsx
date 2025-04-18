import { SearchRecipe } from "@/types/recipe";
import Image from "next/image";
import Link from "next/link";

interface RecipeCardProps {
    recipe: SearchRecipe,
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <Link href={`/recipes/${recipe.id}`} className="p-4 rounded-xl bg-secondary w-full md:w-auto flex flex-col gap-2 items-center">
            <div className="text-center line-clamp-2 min-h-[2.6rem]">{recipe.title}</div>
            <Image className="rounded max-w-full" src={recipe.image} alt={recipe.title} width={312} height={231} />
        </Link>
    );
}
