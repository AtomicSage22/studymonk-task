import { motion } from "framer-motion";
import Screen from "../assets/screen-updated.png";
import ShowcaseVideo from '../assets/showcase-video.mp4';

const Features = () => {
    return(
        <section className="flex flex-col items-center justify-center py-[64px] px-[250px]">
      <div className="text-[64px] font-[700]">Connecting isn't hard anymore.</div>
      <div className="flex justify-center gap-[20px] mt-[100px] ">
        <motion.div
          className="max-w-[700px] pt-[61px] pr-[56px] pb-[58px] pl-[60px] rounded-3xl border-[hsla(0, 0%, 51%, 0.16)] bg-[#8EC3B0] border-[1px] border-solid"
          initial={{ x: -400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}>
          <h2 className="text-[32px] text-[#2F2E41] font-[600]">Powered by AI</h2>
          <p className="mt-[20px] text-[24px] font[500] text-[#2F2E41] leading-[1.5]">
            Our experts have developed machine learning models that can help you
            find the team you need, within a few clicks. Compare teams and
            professionals side by side using hundreds of parameters.
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-[20px]">
          <motion.div
            className="w-[328px] h-[210px] rounded-3xl flex flex-col items-center bg-[#8EC3B0] justify-center"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}>
            <div className="text-[64px] font-[700 bg-clip-text] bg-[linear-gradient(45deg, #30a8bc, #4dda68)]">200+</div>
            <div className="text-[16px] font-500">Awards</div>
          </motion.div>
          <motion.div
            className="w-[328px] h-[210px] rounded-3xl bg-[#8EC3B0] flex flex-col items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}>
            <div className="text-[64px] font-[700 bg-clip-text] bg-[linear-gradient(315deg, #1860c4, #58d0d9)]">2nd place</div>
            <div className="text-[16px] font-500">Best startups of the year</div>
          </motion.div>
          <motion.div
            className="w-[328px] h-[210px] rounded-3xl bg-[#8EC3B0] flex flex-col items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}>
            <div className="text-[64px] font-[700 bg-clip-text]">10,000+</div>
            <div className="text-[16px] font-500">Freelancers</div>
          </motion.div>
          <motion.div
            className="w-[328px] h-[210px] rounded-3xl bg-[#8EC3B0] flex flex-col items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}>
            <div className="text-[64px] font-[700 bg-clip-text]">100%</div>
            <div className="text-[16px] font-500">Commitment</div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="w-full pt-[65px] pr-[90px] pb-[65px] pl-[66px] flex justify-between mt-[20px] bg-[#8EC3B0] rounded-3xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}>
        <div className="flex flex-col gap-[26px] max-w-[440px]">
          <div className="text-[44px] font-[600] leading-[1.2] max-w-[400px] mt-[40px]">A little insight into our work</div>
          <div className="text-[20px] font-[500] leading-[1.5]">
            Take a look at how you can access the most prized features of our
            company.
          </div>
        </div>
        <div className="relative">
          <img src={Screen} alt="screen" className="h-[370px]" />
          <video
            className="absolute top-[10px] left-[60px] w-4/5"
            src={ShowcaseVideo}
            autoPlay
            loop
            muted></video>
        </div>
      </motion.div>
    </section>
    )
}

export default Features