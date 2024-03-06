import video from "../../assets/large.mp4";
import Discount from "../Discount";
import { AnimatePresence, easeIn, motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen">
      {/* Discount section */}
      <Discount />

      {/* hero content section */}
      <div className="pt-8">
        <div className="flex max-w-[80%] justify-center mx-auto">
          <video
            src={video}
            autoPlay
            loop
            muted
            className=""
          />
        </div>

        {/* content area */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: easeIn,
              duration: 2,
            }}
            exit={{ opacity: 0 }}
            id="hero__content"
            className="mt-14 gap-10 flex flex-col items-center sm:flex-row sm:justify-center"
          >
            <button
              className="bg-[#0077ED] py-2 px-6 rounded-full text-white sm:mr-4"
              type="button"
            >
              Buy
            </button>
            <p className="font-semibold text-[16px] sm:text-[21px]">
              From $799 or $33.29/mo. for 24 mo.1
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}