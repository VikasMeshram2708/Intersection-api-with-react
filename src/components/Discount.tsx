import { IoIosArrowForward } from "react-icons/io";

export default function Discount() {
  return (
    <section className="bg-[#f5f5f7] min-h-10 font-['sfproreg']">
      <div className="flex p-5 tracking-wide text-[17px] items-center justify-center flex-col leading-6">
        <h1>Get $180–$620 in credit toward iPhone 15 when </h1>
        <div className="flex items-center">
          <p>you trade in iPhone 11 or higher.*</p>
          <p className="flex items-center text-blue-500">
            Buy{" "}
            <span>
              <IoIosArrowForward size={20} />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
