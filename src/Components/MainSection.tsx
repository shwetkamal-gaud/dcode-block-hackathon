import { motion } from "framer-motion";
import Singularity from '../assets/Singularity.svg'
import Button from "./Button";
import Carousel from "./Carousel";
import logos1 from '../assets/1.svg';
import logos2 from '../assets/2.svg';
import logos3 from '../assets/3.svg';
import logos4 from '../assets/4.svg';
const MainSection = () => {
    const logos = [
        logos1,
        logos2,
        logos3,
        logos4
    ]
    return (
        <section className="bg-image flex justify-center flex-col gap-4 items-center text-white text-center py-10">
            <img loading="lazy" src={Singularity} />
            <motion.h1
                className="text-4xl md:text-6xl font-bold shadow-md neon-header"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}

            >
                <span className="bg-orange-500 p-1 rounded">Ha</span>ckIndia2025
            </motion.h1>
            <motion.p initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }} className="text-lg mt-4 ">India’s Biggest Web3 & AI Hackathon</motion.p>
            <motion.p
                className="mt-6 px-6 text-medium text-white py-3 bg-gradient-to-r from-[#230833] to-[#6A1799] rounded"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                February 28 - September 28
            </motion.p>
            <div className=" flex gap-10">
                <p className="text-medium"><span className="text-orange-500 ">$150+</span> Price Pool</p>
                <div className=" border-l-2 border-white"></div>
                <p className="text-medium"><span className="text-orange-500 ">150+</span> Uiversity</p>
                <div className=" border-l-2 border-white"></div>
                <p className="text-medium"><span className="text-orange-500 ">25,000+</span> Students</p>

            </div>
            <motion.div whileHover={{ scale: 1 }}>
                <Button title="Register now!" />
            </motion.div>
            <div className="w-full bg-[#D9D9D9] px-2 mt-5">
                <Carousel logos={logos} speed={30} />
            </div>
        </section>
    );
};

export default MainSection;
