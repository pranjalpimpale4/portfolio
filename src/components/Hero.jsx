import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-black`}>
      {/* Text Section */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Pranjal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Conjuring lines of code into elegant dances of <br className="sm:block hidden" />
            functionality and form.
          </p>
        </div>
      </div>

      {/* ComputersCanvas Section */}
      <div
        style={{
          position: "absolute",
          bottom: "-28%", // Position near the bottom of the screen
          left: "50%",
          transform: "translateX(-50%)", // Center the image horizontally
        }}
      >
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about"></a>
      </div>
    </section>
  );
};

export default Hero;
