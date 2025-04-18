import { GetRecipesOptions } from "./apiService";


export function generateSearchParams({ query, cuisine, maxReadyTime }: GetRecipesOptions) {
    return new URLSearchParams({
        ...(query && { query }),
        ...(cuisine && { cuisine }),
        ...(maxReadyTime && { maxReadyTime: maxReadyTime.toString() }),
    });
}
