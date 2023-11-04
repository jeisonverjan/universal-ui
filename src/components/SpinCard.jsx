import Section from "../containers/Section";

function SpinCard() {
  return (
    <Section id="spin-card" title="Spin Card">
      <div className="w-full">
        <div className="bg-[#07182E] w-[190px] h-[254px] rounded-xl relative grid place-content-center mx-auto overflow-hidden md:w-[290px] md:h-[354px] shadow-xl">
          <div className="absolute h-[130%] w-[150px] bg-gradient-to-b from-[rgb(0,183,255)] to-[rgb(255,48,255)] animate-slowSpin top-[-30px] right-5 md:w-[250px] md:h-[130%] md:top-[-50px] "></div>
          <span className="font-mono text-white font-bold text-3xl uppercase z-10">
            card
          </span>
          <div className="absolute inset-2 bg-[#07182E] rounded-xl"></div>
        </div>
      </div>
    </Section>
  );
}

export default SpinCard;
