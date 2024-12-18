import {FC, JSX, MutableRefObject} from "react";
import {BsArrowLeftCircle} from "react-icons/bs";
import {BsArrowRightCircle} from "react-icons/bs";
import Slider from "./Slider.tsx";
import {useRef} from "react";
import {SwiperRef} from "swiper/react";
import useGetFeaturedMeals from "../../hooks/service/useGetFeaturedMeals.tsx";
import LoadingContainer from "../ui/LoadingContainer.tsx";


const Featured: FC = (): JSX.Element => {
    const swiperRef: MutableRefObject<SwiperRef | null> = useRef<SwiperRef | null>(null);


    const {data, isLoading, isError, error} = useGetFeaturedMeals()


    if (isLoading) return <section className="featured">
        <LoadingContainer heightC={"300px"}/>
    </section>

    if (isError) return <h1>{error.message}</h1>


    return <article className="featured">

        <div className="featured_header">
            <h1>featured recipes</h1>

            <div className="nav_buttons">
                <BsArrowLeftCircle className="arrow_icons" onClick={(): void => {
                    swiperRef.current?.swiper.slidePrev();
                }}/>
                <BsArrowRightCircle className="arrow_icons" onClick={(): void => {
                    swiperRef.current?.swiper.slideNext();
                }}/>
            </div>
        </div>


        <div className="swiper_wrapper">
            <Slider meals={data ?? []} swiperRef={swiperRef}/>

        </div>

    </article>
}


export default Featured;