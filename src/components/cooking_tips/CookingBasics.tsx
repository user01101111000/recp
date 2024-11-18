import {FC, JSX} from "react";
import RecipeCard from "../ui/RecipeCard.tsx";
import {IFoodCardProps} from "../../types/components/components_types.ts";

const cooking_tips_data: IFoodCardProps[] = [
    {
        id: "1",
        image: "https://dorothy-lane-market.s3.us-east-2.amazonaws.com/recipes/wusthof-knives1_1462x1000.JPEG",
        title: "Knife Skills",
        description: "Unlock the art of precision in your kitchen with proper chopping, dicing, and slicing techniques. Elevate your culinary creations to new heights.",
        area: "15 min - 01 JUN 23 ",
        vegan: false,
        video: "https://youtu.be/G-Fg7l7G1zw?si=2L5ZInOJA_aL9XKp"
    }
]


const CookingBasics: FC = (): JSX.Element => {

    const cooking_basics_elements: JSX.Element[] = cooking_tips_data.map((data: IFoodCardProps) => {
        return <RecipeCard recipe={true} key={data.id} data={data}/>
    })


    return <section className="cooking_basics">

        <h1>Mastering the Basics</h1>


        <div className="cooking_basics_area">

            {cooking_basics_elements}

        </div>

    </section>
}

export default CookingBasics;