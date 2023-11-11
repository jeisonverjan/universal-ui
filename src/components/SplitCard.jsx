function SplitCard() {
  return (
    <div className="relative w-[190px] h-[254px] bg-[#000] rounded-[8px] cursor-pointer group flex items-end justify-start md:w-[250px] md:h-[334px]">
      <div className="absolute inset-0 m-auto w-[200px] h-[264px] left-[-5px] rounded-[10px] pointer-events-none bg-gradient-to-tl from-[#e81cff] to-[#40c9ff] -z-10 group-hover:-rotate-90 group-hover:scale-x-[1.34] group-hover:scale-y-[0.77] transition-all duration-[.6s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] md:w-[260px] md:h-[344px]"></div>

      <div className="absolute inset-0 bg-gradient-to-tl from-[#fc00ff] to-[#00dbde] blur-[20px] scale-[0.95] z-[-1] group-hover:blur-[30px]"></div>

      <div className="text-white space-y-3 p-4 md:p-6">
        <p className="text-[20px] capitalize font-bold md:text-2xl">
          Popular this month
        </p>
        <p className="text-[14px] md:text-xl">Powered By</p>
        <p className="text-[14px] text-[#e81cff] font-semibold md:text-xl">
          Uiverse
        </p>
      </div>
    </div>
  );
}

export default SplitCard;
