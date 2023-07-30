function ButtonActions({img, text}) {
  return (
    <div className="w-[115px] h-[115px] mt-5 p-6 flex flex-col justify-center items-center gap-1 border-2 border-gray-300 bg-white shadow-md rounded-md">
      <img src={img} alt={text} className="w-16 h-16"/>
      <p className="w-10 flex flex-wrap justify-center items-center text-sm font-semibold">{text}</p>
    </div>
  )
}

export default ButtonActions