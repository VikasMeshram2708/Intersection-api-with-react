import gsap from "gsap";
import { useRef, useEffect } from "react";
import video from "../../assets/large.mp4";
import Discount from "../Discount";

export default function Hero() {
  const HeroContent = useRef(null);

  const heroOptions = {
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.25,
  };

  const heroContentObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if(!entry?.isIntersecting) {
        return;
      }
      gsap.to(HeroContent.current, {
        y: 0,
        duration: 2, // Adjust duration as needed
      });
      gsap.to(HeroContent.current, {
        y: 50,
        duration: 2, // Adjust duration as needed
      });
    });
  }, heroOptions);

  useEffect(() => {
    if (HeroContent?.current) {
      heroContentObserver.observe(HeroContent?.current);
    }

    return () => {
      if (HeroContent?.current) {
        heroContentObserver.unobserve(HeroContent?.current);
      }
    };
  }, [heroContentObserver]);

  // useEffect(() => {
  //   gsap.to(HeroContent.current, {
  //     y: 0,
  //     duration: 2, // Adjust duration as needed
  //   });
  //   gsap.to(HeroContent.current, {
  //     y: 50,
  //     duration: 2, // Adjust duration as needed
  //   });
  // }, []);

  return (
    <section className="min-h-screen">
      {/* Discount section */}
      <Discount />

      {/* hero content section */}
      <div className="pt-8">
        <div className="flex justify-center mx-auto object-cover">
          <video src={video} autoPlay loop muted></video>
        </div>
        {/* content area */}
        <div
          ref={HeroContent}
          id="hero__content"
          className="mt-14 gap-10 flex items-center flex-col"
        >
          <button
            className="bg-[#0077ED] py-2 px-6 rounded-full text-white"
            type="button"
          >
            Buy
          </button>

          <p className="font-semibold text-[21px]">
            From $799 or $33.29/mo. for 24 mo.1
          </p>
        </div>
      </div>
    </section>
  );
}
