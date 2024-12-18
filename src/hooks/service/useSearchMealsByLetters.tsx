import search_meals_by_letters from "../../service/meals/search_meals_by_letters.ts";
import {useMutation, UseMutationResult} from "@tanstack/react-query";
import {IMealResponse} from "../../types/data/data_types.ts";


const useSearchMealsByLetters: () => UseMutationResult<IMealResponse, Error, string, unknown> = (): UseMutationResult<IMealResponse, Error, string, unknown> => {
    return useMutation({
        mutationKey: ['searchMeals'],
        mutationFn: search_meals_by_letters,
    })
}
export default useSearchMealsByLetters;
