import Pag1Img from "./../../public/images/pag1.png";
import Pag2Img from "./../../public/images/pag2.png";
import Pag3Img from "./../../public/images/pag3.png";
import Pag4Img from "./../../public/images/pag4.png";
import Pag5Img from "./../../public/images/pig-bank2.png";
import { PiPlus } from "react-icons/pi";

import ButtonActions from "./ButtonActions";

function Actions() {
  return (
    <div className="grid grid-cols-3 mx-3 gap-2">
      <ButtonActions img={Pag2Img} text={"Recargar transporte"} />
      <ButtonActions img={Pag3Img} text={"Recargar celular"} />
      <ButtonActions img={Pag1Img} text={"Pagar servicios"} />
      <ButtonActions img={Pag4Img} text={"Cobrar vender"} />
      <ButtonActions img={Pag5Img} text={"Ahorrar"} />
      <div className="w-28 h-28 mt-5 flex flex-col justify-center items-center gap-2">
        <PiPlus className="w-12 h-12 rounded-full border bg-white p-2" />
        <p className="flex justify-center items-center text-sm font-semibold">
          Ver más
        </p>
        </div>
    </div>
  );
}

export default Actions;
