import { GiWallet } from "react-icons/gi";

function WalletCard() {
  return (
    <div className="relative grid place-content-center w-[220px] h-[321px] bg-white transition-all ease-in-out duration-300 hover:scale-[1.005] hover:translate-y-[-5px] hover:shadow-2xl group rounded-tr-xl overflow-hidden cursor-pointer">
      <div className="absolute w-[118px] h-[118px] rounded-full top-20 left-12 bg-[#ceb2fc] transition-all group-hover:scale-[4] duration-300 ease-in-out z-0"></div>

      <div className="grid place-content-center relative w-[131px] h-[131px] rounded-full bg-white border-2 border-[#ceb2fc] z-10 transition-all duration-300 group-hover:border-white group-hover:bg-[#ceb2fc]">
        <div className="absolute w-[118px] h-[118px] rounded-full bg-[#ceb2fc] group-hover:bg-white top-[7px] left-[7px]"></div>
        <GiWallet className="z-20 text-[70px] text-[#805fb5]" />
      </div>
      <p className="font-primary tracking-wide text-2xl text-center capitalize mt-5 z-20 text-[#4c5656] group-hover:text-white font-bold">
        wallet
      </p>
    </div>
  );
}

export default WalletCard;
