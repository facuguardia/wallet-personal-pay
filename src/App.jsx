import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardHero from "./components/CardHero";
import CardVisa from "./components/CardVisa";
import Navbar from "./components/Navbar";
import Actions from "./components/Actions";
import News from "./components/News";
import DesktopAccessScreen from "./components/DesktopAccessScreen";
function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsDesktop(!isMobile);
  }, []);

  return (
    <>
      {isDesktop ? (
        <DesktopAccessScreen />
      ) : (
        <>
          <div className="w-full min-h-screen bg-gradient-to-b from-[#433ad3] from-20% via-[#f4f4fc] via-30% to-[#f4f4fc] to-90% overflow-y-auto overflow-x-hidden mb-16">
            <Header />
            <CardHero />
            <CardVisa />
            <Actions />
            <News />
            <div className="fixed bottom-0 left-0 w-screen">
              <Navbar />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
