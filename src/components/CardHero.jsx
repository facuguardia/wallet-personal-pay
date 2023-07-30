import { AiOutlineEye } from "react-icons/ai";
import { FiArrowUpRight, FiArrowDownLeft, FiArrowUp } from "react-icons/fi";
import ButtonHero from "./ButtonHero";
import IconLevel from "/images/icon-level.png";

function CardHero() {
  return (
    <div className="flex justify-center">
      <div className="w-[370px] h-auto bg-white rounded-2xl shadow-lg p-5 border">
        <div className="flex justify-between items-center">
          <h4 className="text-lg flex justify-center items-center gap-2 font-medium">
            Mi dinero{" "}
            <span className="flex justify-center items-center gap-1 text-xs text-white rounded-full bg-green-500 px-2 py-1 ">
              <FiArrowUp />
              84,0%
            </span>
          </h4>
          <span className="flex justify-center items-center gap-1 text-xs font-medium">
            <h5 className="text-gray-400">Tú nivel..</h5>
            <img src={IconLevel} alt="" className="w-7 h-7" />
          </span>
        </div>
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold my-2 relative">
            $89<span className="text-sm font-normal absolute ml-1">97</span>
          </h1>
          <span className="mr-1.5">
            <AiOutlineEye />
          </span>
        </div>
        <div className="flex justify-center items-center gap-3">
          <ButtonHero
            style={
              "flex justify-center items-center gap-2 py-4 px-8 border rounded-2xl bg-[#433ad3] text-white font-semibold"
            }
            text={"Ingresar"}
            icon={<FiArrowDownLeft />}
          />
          <ButtonHero
            style={
              "flex justify-center items-center gap-2 py-4 px-8 border rounded-2xl bg-[#e9e7ff] text-[#433ad3] font-semibold"
            }
            text={"Transferir"}
            icon={<FiArrowUpRight />}
          />
        </div>
      </div>
    </div>
  );
}

export default CardHero;
