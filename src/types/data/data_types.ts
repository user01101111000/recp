export interface ICategoryResponse {
    categories: ICategory[];
}

export interface ICategory {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}


export interface IMealResponse {
    meals: Meal[];
}

export interface Meal {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate: string | null;
    strCategory: string | null;
    strArea: string | null;
    strInstructions: string | null;
    strMealThumb: string | null;
    strTags: string | null;
    strYoutube: string | null;

    [key: `strIngredient${number}`]: string | null;

    [key: `strMeasure${number}`]: string | null;

    strSource: string | null;
    strImageSource: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: string | null;
}


export interface ICategoryMealResponse {
    meals: CategoryMeal[];
}

export interface CategoryMeal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}
