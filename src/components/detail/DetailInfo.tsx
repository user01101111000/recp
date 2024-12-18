import {FC, JSX} from "react";
import {DetailInfoProps} from "../../types/components/components_types.ts";
import ReactPlayer from 'react-player/youtube'
import divide_text from "../../utils/divide_text.ts";


const DetailInfo: FC<DetailInfoProps> = (props: DetailInfoProps = {
    ingredients: [],
    measures: [],
    instructions: "",
    youtube: ""
}): JSX.Element => {


    const ingredients_items: JSX.Element[] = props.ingredients.map((item: string, index: number): JSX.Element => <li
        key={`${item}${index}`}>{item}</li>)

    const measures_items: JSX.Element[] = props.measures.map((item: string, index: number): JSX.Element => <li
        key={`${item}${index}`}>{item}</li>)


    const instructions_items: JSX.Element[] = divide_text(props.instructions).map((item: string, index: number): JSX.Element =>
        <p key={`item${index}`}>{item}</p>)


    return <div className="detail_info">

        <div className="detail_info_instructions">
            <div className="detail_info_instructions_content">
                <h1>Instructions</h1>
                {instructions_items}
            </div>


            {props.youtube && <div className="detail_info_instructions_video">

                <h1>Video</h1>
                <div className="player_wrapper">
                    <ReactPlayer className="react_player" controls url={props.youtube}/>
                </div>
            </div>}


        </div>


        <div className="detail_info_ingredients_measures_area">

            <div className="detail_info_ingredients_area detail_info_area">
                <h1>Ingredients</h1>
                <ul>
                    {ingredients_items}
                </ul>
            </div>
            <div className="detail_info_measures_area detail_info_area">
                <h1>Measures</h1>
                <ul>
                    {measures_items}
                </ul>
            </div>


            <div className="detail_info_note">
                <p><span>Note :</span> Nutritional values are approximate and may vary based on specific ingredients and
                    portion
                    sizes.</p>
            </div>

        </div>


    </div>

}

export default DetailInfo;