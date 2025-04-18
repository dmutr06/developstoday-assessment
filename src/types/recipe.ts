

export interface SearchRecipe {
    id: number,
    image: string,
    title: string,
}

export interface Recipe {
    title: string,
    extendedIngredients: {
        name: string,
        id: number,
    }[]
}
