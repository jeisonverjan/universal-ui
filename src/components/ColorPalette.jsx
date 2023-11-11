import { BsThreeDots } from "react-icons/bs";

export default function ColorPalette() {
  return (
    <div className="w-full">
      <div className="bg-white w-full h-56 flex flex-col rounded-xl overflow-hidden shadow-xl md:h-96  mx-auto">
        <div className="flex flex-1">
          <div className="color bg-[#264653]">
            <span>264653</span>
          </div>
          <div className="color bg-[#2A9D8F]">
            <span>2A9D8F</span>
          </div>
          <div className="color bg-[#E9C46A]">
            <span>E9C46A</span>
          </div>
          <div className="color bg-[#F4A261]">
            <span>F4A261</span>
          </div>
          <div className="color bg-[#E76F51]">
            <span>E76F51</span>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 py-2">
          <span className="font-mono text-slate-400 md:text-2xl lg:text-3xl">
            53421 saves
          </span>
          <BsThreeDots className="text-2xl  text-slate-400 cursor-pointer hover:text-slate-600 md:text-4xl lg:text-5xl" />
        </div>
      </div>
    </div>
  );
}
