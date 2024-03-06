import { useEffect, useRef } from "react";

export default function Highlights() {
  const highlightContainer = useRef(null);

  const onEnter = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("translate-x-6");
      entry.target.classList.add("duration-1000");
      entry.target.classList.add("ease-in");
      entry.target.classList.add("delay-700");
      console.log("entry", entry);
    });
  };
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px 0px 100px 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(onEnter, options);

    if (highlightContainer.current) {
      observer.observe(highlightContainer.current);
    }

    return () => {
      if (highlightContainer.current) {
        observer.unobserve(highlightContainer.current);
      }
    };
  }, [onEnter]);

  return (
    <section className="bg-slate-900 min-h-screen w-full">
      <div
        ref={highlightContainer}
        className="flex items-center gap-10 max-w-[80%] pt-52 mx-auto"
      >
        {Array.from({ length: 3 }, (_, index) => {
          return (
            <div key={index} className="text-white text-justify">
              <h1 className="text-[1.75rem] font-semibold text-orange-500">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-[1.25rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                vitae cum labore, tempora, quas quibusdam illum eligendi
                possimus exercitationem ipsum dolores dolorem facilis officia.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
