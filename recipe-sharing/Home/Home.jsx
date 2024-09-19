import { useRef} from "react";
import HomeTop from '../../pages/Home/HomeTop'
import HomeMain from '../../pages/Home/HomeMain'
import CookBanner from "../../pages/Home/CookBanner";

const Home = () => {

  const homeMainRef = useRef(null);

  return (
    <div>
      <HomeTop scrollToSection={homeMainRef}/>
      <div ref={homeMainRef}>
        <HomeMain/>
      </div>
      <CookBanner/>
    </div>
  )
}

export default Home
