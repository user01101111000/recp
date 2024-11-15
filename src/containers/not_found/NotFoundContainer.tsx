import {FC} from "react";
import {motion} from "framer-motion";

const NotFoundContainer: FC = () => {
    return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="not_found">NotFound</motion.section>
}

export default NotFoundContainer;