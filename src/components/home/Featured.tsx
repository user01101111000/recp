import {FC, MutableRefObject} from "react";
import {BsArrowLeftCircle} from "react-icons/bs";
import {BsArrowRightCircle} from "react-icons/bs";
import Slider from "./Slider.tsx";
import {useRef} from "react";
import {SwiperRef} from "swiper/react";


const Featured: FC = () => {
    const swiperRef: MutableRefObject<SwiperRef | null> = useRef<SwiperRef | null>(null)

    return <article className="featured">

        <div className="featured_header">
            <h1>featured recipes</h1>

            <div className="nav_buttons">
                <BsArrowLeftCircle className="arrow_icons" onClick={() => {
                    swiperRef.current?.swiper.slidePrev();
                }}/>
                <BsArrowRightCircle className="arrow_icons" onClick={() => {
                    swiperRef.current?.swiper.slideNext();
                }}/>
            </div>
        </div>


        <div className="swiper_wrapper">
            <Slider swiperRef={swiperRef}/>

        </div>

    </article>
}


export default Featured;