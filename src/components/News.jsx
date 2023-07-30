import Card1 from "./../../public/images/card1.png";
import Card2 from "./../../public/images/card2.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function News() {
  return (
    <>
      <h1 className="text-xl my-5 ml-3 font-bold">Novedades</h1>
      <div className="flex ml-3 gap-2 ">
        <img src={Card1} alt="" className="w-auto rounded-2xl" />
        <img src={Card2} alt="" className="w-auto rounded-2xl" />
      </div>
      <div className="flex justify-end mr-3 mt-3">
        <MdKeyboardDoubleArrowRight className="text-3xl text-gray-400 ml-3" />
      </div>
    </>
  );
}

export default News;
