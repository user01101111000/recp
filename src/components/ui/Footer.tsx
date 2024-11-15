import {FC} from "react";
import logo from "../../assets/images/logo.svg";
import {NavLink} from "react-router-dom";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

const Footer: FC = () => {

    return <footer className="footer">


        <div className="footer_header">

            <figure>
                <img src={logo} alt="logo"/>
            </figure>


            <nav>

                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/recipes"}>Recipes</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/about-us"}>About us</NavLink>


            </nav>


            <div className="social_media_footer">
                <a href="https://github.com/user01101111000/recp" target="_blank"><FaGithub className="icon"/></a>
                <a href="https://www.linkedin.com/in/elnurguliyev/" target="_blank"><FaLinkedin className="icon"/></a>


            </div>

        </div>

        <hr/>

        <div className="footer_footer">

            <h1>Copyright: © 2024 Cooks Delight.</h1>
        </div>


    </footer>
}

export default Footer;