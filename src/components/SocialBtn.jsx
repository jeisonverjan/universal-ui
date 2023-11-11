import {
  SiInstagram,
  SiTwitter,
  SiCodeigniter,
  SiCodepen,
  SiBitcoin,
  SiDiscord,
  SiGithub,
  SiTelegram,
  SiReddit,
} from "react-icons/si";

function SocialBtn() {
  return (
    <div className="w-[16em] h-[16em] relative flex items-center justify-center group hover:cursor-pointer transition-all duration-500 hover:w-[18em] hover:h-[18em] ease-in-out">
      <div className="absolute inset-0 bg-[linear-gradient(270deg,#03a9f4,#cc39a4,#ffb5d2)] shadow-[inset_0px_0px_180px_5px_#ffffff] rotate-90 -z-10 group-hover:opacity-0 transition-all duration-300 ease-in-out"></div>

      <div className="absolute inset-0 bg-[rgba(255,255,255,0.596)] backdrop-blur-[5px]  border-4 border-white grid grid-cols-3 grid-rows-3 gap-2 group-hover:blur-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-xl overflow-hidden">
        <div className="social-card hover:bg-[#E4405F] text-[#E4405F] hover:text-white">
          <SiInstagram />
        </div>
        <div className="social-card hover:bg-[#1D9BF0] text-[#1D9BF0] hover:text-white">
          <SiTwitter />
        </div>
        <div className="social-card hover:bg-[#EF4223] text-[#EF4223] hover:text-white">
          <SiCodeigniter />
        </div>
        <div className="social-card hover:bg-[#000000] text-[#000000] hover:text-white">
          <SiCodepen />
        </div>
        <div className="social-card hover:bg-[#F7931A] text-[#F7931A] hover:text-white">
          <SiBitcoin />
        </div>
        <div className="social-card hover:bg-[#5865F2] text-[#5865F2] hover:text-white">
          <SiDiscord />
        </div>
        <div className="social-card hover:bg-[#181717] text-[#181717] hover:text-white">
          <SiGithub />
        </div>
        <div className="social-card hover:bg-[#26A5E4] text-[#26A5E4] hover:text-white">
          <SiTelegram />
        </div>
        <div className="social-card hover:bg-[#FF4500] text-[#FF4500] hover:text-white">
          <SiReddit />
        </div>
      </div>

      <p className="text-slate-800  absolute text-center uppercase leading-loose tracking-widest font-primary text-xl group-hover:hidden font-bold">
        hover <br /> for <br /> social
      </p>
    </div>
  );
}

export default SocialBtn;
