import { motion } from "framer-motion";
import CrackSvg from '../assets/crack.svg'
import Singularity from '../assets/Singularity-black.svg'
import Rair from '../assets/Rair.svg'
import Stratis from '../assets/Straits.svg'
import Sharp from '../assets/Sharp.svg'
import CSharp from '../assets/CSharp.svg'
import BeyondTheCode from '../assets/BeyondTheCode.svg'
const HackIndiaVideoSection = () => {
    const logos = [
        Singularity,
        Rair,
        Stratis,
        Sharp,
        CSharp,
        BeyondTheCode,
    ]
    return (
        <div className="">
            <div className='grid bg-[#282028] md:grid-cols-2 grid-cols-1'>
                <section className=" text-white py-16">
                    <img loading="lazy" src={CrackSvg} alt="" />
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    className="text-white py-10 md:ps-30 ps-5 flex flex-col"
                    >
                        <div className="">
                            <h2 className="text-5xl text-start font-bold neon-text">150+</h2>
                            <p className="text-lg text-gray-300 neon-text">Universities participating</p>
                        </div>
                        <div className="flex text-sm md:text-3xl justify-start gap-10  mt-6">
                            <div>
                                <h2 className=" font-bold ">72+</h2>
                                <p className="text-gray-300">Judges</p>
                            </div>
                            <div>
                                <h2 className="font-bold ">21</h2>
                                <p className="text-gray-300">Hackathons</p>
                            </div>
                            <div>
                                <h2 className="font-bold ">36+</h2>
                                <p className="text-gray-300">Great Speakers</p>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <section className="text-white text-center py-16">
                    <motion.div initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                         className="flex justify-center item-center">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/gi1kkMbfNAE"
                            title="HackIndia 2024 Finals"
                            className="rounded-lg w-full max-w-[25rem]"
                        ></iframe>
                    </motion.div>
                </section>
            </div>
            <div className="w-full  flex flex-wrap justify-between bg-[#D9D9D9] px-5 ">
                {logos.map((item)=>{
                    return(
                        <img src={item} alt='sponsers-logo'/>
                    )
                })}
                
            </div>
        </div>
    )
}

export default HackIndiaVideoSection