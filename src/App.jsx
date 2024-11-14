import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";
import Banner from "./components/Home/Banner";
import { BentoGrid1 } from "./components/Home/PopularSearches";
import SearchDestination from "./components/Home/SearchDestination";
import { TravelModes } from "./components/Home/TravelModes";
import {Services} from "./components/Home/Services"; 
import Progressbar from "./components/Home/Progressbar";
import TopPackages from "./components/Home/TopPackages";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Recommandations from "./components/Home/Recommandations";
import Spline from '@splinetool/react-spline';
function App() {
  return (
    <>
    <Progressbar/>
      {/* <Navbar /> */}
      {/* <Banner/> */}
      {/* <TravelModes /> */}
      {/* <SearchDestination/> */}
      {/* <BentoGrid1/> */}


      {/* top number of collections  */}
      {/* <TopPackages/>  */}


      {/* unknown lesser wonders of india */}
      {/* <Recommandations/> */}
      {/* <Footer /> */}
      <div className="n h-screen relative">
  <Spline
    scene="https://prod.spline.design/Rijj6tdngyWjfUJv/scene.splinecode"
    className="w-11/12"
  />
</div>


      



    </>
  );
}

export default App;
