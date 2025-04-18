export enum Cuisine {
    African = "African",
    Asian = "Asian",
    American = "American",
    British = "British",
    Cajun = "Cajun",
    Caribbean = "Caribbean",
    Chinese = "Chinese",
    EasternEuropean = "Eastern European",
    European = "European",
    French = "French",
    German = "German",
    Greek = "Greek",
    Indian = "Indian",
    Irish = "Irish",
    Italian = "Italian",
    Japanese = "Japanese",
    Jewish = "Jewish",
    Korean = "Korean",
    LatinAmerican = "Latin American",
    Mediterranean = "Mediterranean",
    Mexican = "Mexican",
    MiddleEastern = "Middle Eastern",
    Nordic = "Nordic",
    Southern = "Southern",
    Spanish = "Spanish",
    Thai = "Thai",
    Vietnamese = "Vietnamese",
}

export const CUISINE_VALUES = Object.values(Cuisine);

export function isCuisineString(cuisine: string): cuisine is Cuisine {
    return CUISINE_VALUES.includes(cuisine as Cuisine);
}
