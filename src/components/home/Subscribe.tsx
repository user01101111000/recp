import {FC, FormEvent, JSX, MutableRefObject, useRef} from "react";
import bg from "../../assets/images/sub_bg.webp"

const Subscribe: FC = (): JSX.Element => {

    const email_ref: MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null)

    function form_submit(e: FormEvent): void {
        e.preventDefault();

        if (email_ref.current && email_ref.current.value) email_ref.current.value = "";

    }


    return <div className="subscribe" id="subscribe">

        <img src={bg} alt="sub_bg" className={"sub_bg"}/>

        <h1>Join the fun Subscribe now!</h1>

        <h2>Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight
            to your inbox.</h2>


        <form onSubmit={form_submit}>

            <div className="input_box">
                <input ref={email_ref} type="email" placeholder="Email address"/>
                <button>Subscribe</button>
            </div>
        </form>


    </div>
}


export default Subscribe;