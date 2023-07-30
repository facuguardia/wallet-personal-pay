import { useEffect, useState } from "react";
import AvatarImg from "./../../public/images/profile-1.png";
import {IoNotificationsOutline} from 'react-icons/io5';


const Header = () => {
  const [text, setText] = useState('Buen día...');

  useEffect(() => {
    setTimeout(() => {
      setText('Hola Facundo');
    }, 2000);
  }, []);


  return (
    <div className="w-full p-5 flex justify-between items-center">
      <div className="flex justify-center items-center gap-4">
        <img
          className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={AvatarImg}
        />
        <h3 className="text-[#faf9ff] font-semibold">{text}</h3>
      </div>
      <div>
        <span className="absolute top-8 right-6 w-2 h-2 bg-red-500 rounded-full"></span>
        <IoNotificationsOutline className="w-7 h-7 text-[#faf9ff]" />
      </div>
    </div>
  );
};

export default Header;
