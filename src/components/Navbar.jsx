import { LiaHomeSolid, LiaWalletSolid } from "react-icons/lia";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { BiCool } from "react-icons/bi";
import ImgQR from "/images/qr.png";

function Navbar() {
  return (
    <div className='flex justify-between items-center px-3 w-full h-auto bg-white shadow-lg border-t-2'>
      <div className="flex flex-col items-center text-sm text-[#5349f8] border-t-[#5349f8] border-t-2 py-2 px-1">
        <LiaHomeSolid className="w-7 h-7" />
        <h6>Inicio</h6>
      </div>
      <div className="flex flex-col items-center text-xs text-gray-500 py-2 px-1">
        <LiaWalletSolid className="w-7 h-7" />
        <h6>Billetera</h6>
      </div>
      <div className="flex flex-col items-center text-md text-[#5349f8] p-2">
        <img
          src={ImgQR}
          alt=""
          className="w-16 h-16 absolute bottom-8 border-2 border-[#5349f8] rounded-full bg-slate-50 p-1"
        />
        <h6 className="mt-5 font-semibold">Paga con QR</h6>
      </div>
      <div className="flex flex-col items-center text-xs text-gray-500 py-2 px-1">
        <BiCool className="w-7 h-7" />
        <h6>Beneficios</h6>
      </div>
      <div className="flex flex-col items-center text-xs text-gray-500 py-2 px-1">
        <RiMenuUnfoldLine className="w-7 h-7" />
        <h6>Más</h6>
      </div>
    </div>
  );
}

export default Navbar;
