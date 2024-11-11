import {FC, MutableRefObject} from "react";
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules";
import {IFoodCardProps} from "../../types/components/components_types.ts";
import RecipeCard from "../ui/RecipeCard.tsx";


export const datas: IFoodCardProps[] = [
    {
        image: "https://assets.digitalcontent.marksandspencer.app/image/upload/w_640,q_auto,f_auto/MS_FD_F01C_29420636_NC_X_EC_0",
        title: "Savory Herb-Infused Chicken",
        description: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
        additional: "Italian, Vegeterian",
    },
    {
        image: "https://assets.digitalcontent.marksandspencer.app/image/upload/w_640,q_auto,f_auto/MS_FD_F01C_29420636_NC_X_EC_0",
        title: "Savory Herb-Infused Chicken",
        description: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
        additional: "Italian, Vegeterian",

    },
    {
        image: "https://assets.digitalcontent.marksandspencer.app/image/upload/w_640,q_auto,f_auto/MS_FD_F01C_29420636_NC_X_EC_0",
        title: "Savory Herb-Infused Chicken",
        description: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
        additional: "Italian, Vegeterian",
    },
    {
        image: "https://assets.digitalcontent.marksandspencer.app/image/upload/w_640,q_auto,f_auto/MS_FD_F01C_29420636_NC_X_EC_0",
        title: "Savory Herb-Infused Chicken",
        description: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
        additional: "Italian, Vegeterian",
    },
    {
        image: "https://assets.digitalcontent.marksandspencer.app/image/upload/w_640,q_auto,f_auto/MS_FD_F01C_29420636_NC_X_EC_0",
        title: "Savory Herb-Infused Chicken",
        description: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
        additional: "Italian, Vegeterian",
    },
    {
        image: "https://assets.digitalcontent.marksandspencer.app/image/upload/w_640,q_auto,f_auto/MS_FD_F01C_29420636_NC_X_EC_0",
        title: "Savory Herb-Infused Chicken",
        description: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
        additional: "Italian, Vegeterian",
    },
]


const Slider: FC<{ swiperRef: MutableRefObject<SwiperRef | null> }> = (props: {
    swiperRef: MutableRefObject<SwiperRef | null>
}) => {

    const slides = datas.map((data: IFoodCardProps, index: number) => <SwiperSlide
        key={index}>

        <RecipeCard image={data.image} title={data.title} description={data.description} additional={data.additional}/>

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