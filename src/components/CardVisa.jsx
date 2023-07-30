import VisaLogo from "/images/visa.png";
import CardPay from "/images/logo-pay.png";

function CardVisa() {
  return (
    <div className="flex justify-center mt-5">
      <div className="w-[370px] h-auto bg-[#5349f8] rounded-2xl shadow-lg p-5 border flex justify-between items-center">
        <img src={VisaLogo} className="w-10 h-5" alt="" />
        <img src={CardPay} alt="" className="w-40" />
      </div>
    </div>
  );
}

export default CardVisa;
