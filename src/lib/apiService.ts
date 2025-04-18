import { Cuisine } from "@/types/cuisine";
import { generateSearchParams } from "./common";
import { Recipe, SearchRecipe } from "@/types/recipe";

export const API_ORIGIN = "https://api.spoonacular.com";
const API_KEY = process.env.API_KEY!;

export interface GetRecipesOptions {
    query?: string,
    cuisine?: Cuisine,
    maxReadyTime?: number,
}

class ApiService {
    constructor() {
        if (!API_KEY) throw new Error("No API_KEY in environment");
    }

    public async getRecipes({ query, cuisine, maxReadyTime }: GetRecipesOptions): Promise<SearchRecipe[] | null> {
        if (!query && !cuisine && !maxReadyTime) return null;
        const searchParams = generateSearchParams({ query, cuisine, maxReadyTime });
        searchParams.set("apiKey", API_KEY);

        try {
            const res = await fetch(`${API_ORIGIN}/recipes/complexSearch?${searchParams}`, {
                next: {
                    revalidate: 60,
                }
            });

            if (res.ok) return (await res.json()).results;
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    public async getRecipe(id: string): Promise<Recipe | null> {
        try {
            const res = await fetch(`${API_ORIGIN}/recipes/${id}/information?apiKey=${API_KEY}`);

            if (res.ok) return res.json();
            const body = await res.json();
            console.log(body);
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}

export const apiService = new ApiService();
