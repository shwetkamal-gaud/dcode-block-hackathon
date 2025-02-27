
import { motion } from "framer-motion";

const Carousel = ({ logos, speed}:{logos:string[], speed:number}) => {
  return (
      <div className="overflow-hidden whitespace-nowrap relative w-full">
          <motion.div
              className="flex space-x-6"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                  ease: "linear",
                  duration: speed,
                  repeat: Infinity,
              }}
          >
              {logos.map((logo, index) => (
                  <img loading="lazy"
                      key={index}
                      src={logo}
                      alt={`Logo ${index}`}
                      className="h-20 w-auto object-contain"
                  />
              ))}
          </motion.div>
      </div>
  )
}

export default Carousel