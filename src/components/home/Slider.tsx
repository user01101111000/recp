import {FC, MutableRefObject} from "react";
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules";
import RecipeCard from "../ui/RecipeCard.tsx";
import {Meal} from "../../types/data/data_types.ts";


const Slider: FC<{ swiperRef: MutableRefObject<SwiperRef | null>, datas: Meal[] }> = (props: {
    swiperRef: MutableRefObject<SwiperRef | null>,
    datas: Meal[]
}) => {

    const slides = props.datas.map((data: Meal) => <SwiperSlide
        key={data.idMeal}>

        <RecipeCard data={
            {
                "image": data?.strMealThumb,
                "title": data?.strMeal,
                description: data?.strInstructions,
                "vegan": data.strCategory === "Vegan" || data.strCategory === "Vegetarian"
                    ? true
                    : false,
                "video": data?.strYoutube,
                area: data?.strArea

            }

        } recipe={true}/>

    </SwiperSlide>)

    return <Swiper
        ref={props.swiperRef}
        modules={[Navigation]}
        grabCursor
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }}
    >
        {slides}
    </Swiper>

}


export default Slider;