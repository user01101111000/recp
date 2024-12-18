import {ChangeEvent, FC, JSX, MutableRefObject, useCallback, useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {SearchBarProps} from "../../types/components/components_types.ts";
import useSearchMealsByLetters from "../../hooks/service/useSearchMealsByLetters.tsx";
import {IMealResponse, Meal} from "../../types/data/data_types.ts";
import debounce, {DebouncedFunction} from "debounce";
import {NavigateFunction, useNavigate} from "react-router-dom";

const SearchBar: FC<SearchBarProps> = (props: SearchBarProps): JSX.Element => {


    const input_ref: MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null)

    const [text, setText] = useState<string>("");
    const [suggestions, setSuggestions] = useState<IMealResponse | null>(null);

    const navigate: NavigateFunction = useNavigate();

    const {mutateAsync} = useSearchMealsByLetters();


    const debounce_func: DebouncedFunction<(term: string) => void> = useCallback(debounce((term: string): void => {
        if (term.length > 0) {
            mutateAsync(term).then((data: IMealResponse): void => {
                setSuggestions(data);
            })
        } else setSuggestions(null)
    }, 500), [])


    useEffect((): void => {
        input_ref?.current?.focus();
    }, [input_ref?.current])

    return <div className="search_input_wrapper">
        <motion.input ref={input_ref}
                      initial={{opacity: 0, scale: 0}}
                      animate={{opacity: 1, scale: 1}}
                      exit={{opacity: 0, scale: 0}}
                      transition={{duration: 0.5, type: "spring"}} type="search"
                      className="search_input" onBlur={(): void => {
            setTimeout((): void => {
                props.setShowSearch(false)
            }, 100)

        }} value={text} onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            debounce_func(e.target.value);
            setText(e.target.value)
        }}/>
        {suggestions && typeof suggestions?.meals == "object" && suggestions?.meals.length > 0 &&
            <ul className="suggestion_list">
                {typeof suggestions?.meals == "object" && suggestions?.meals.map((meal: Meal): JSX.Element => {
                    return <li key={meal.idMeal} onClick={(): void => {
                        navigate("/detail/" + meal.idMeal)
                    }}>
                        <figure>
                            <img src={meal?.strMealThumb ?? ""} alt={meal.strMeal}/>
                        </figure>

                        <div className="suggestion_list_item_content">
                            <h1>{meal.strMeal}</h1>
                            <p>{meal.strCategory}</p>
                        </div>

                    </li>
                })}

            </ul>}


    </div>
}

export default SearchBar;