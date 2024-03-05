import video from "../assets/large.mp4";

export default function Hero() {
  return (
    <section className="pt-8">
      <video src={video} autoPlay loop muted></video>
      {/* content area */}
      <div className="mt-10 gap-5 flex items-center flex-col">
        <button
          className="bg-[#0077ED] py-2 px-6 rounded-full text-white"
          type="button"
        >
          Buy
        </button>

        <p className="font-semibold text-[21px]">From $799 or $33.29/mo. for 24 mo.1</p>
      </div>
    </section>
  );
}
