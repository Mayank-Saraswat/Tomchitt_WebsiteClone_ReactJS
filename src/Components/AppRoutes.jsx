import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import BeautyPage from "./SubPages/Beauty/BeautyPage";
import BeautyTherapyWorking from "./SubPages/Beauty/BeautyTherapyWorking";
import CleaningPage from "./SubPages/Cleaning/CleaningPage";
import AutomobilePage from "./SubPages/Automobile/AutomobilePage";
import EngineeringPage from "./SubPages/Engineering/EngineeringPage";
import DigitalServicePage from "./SubPages/DigitalService/DigitalServicePage";
import FreeServicePage from "./SubPages/FreeService/FreeServicePage";
import HealthSafety from "./SubPages/HealthSafety";
import AboutTomchitt from "./SubPages/AboutTomchitt";
import Trending from "./SubPages/Trending/Trending";
import Promotions from "./SubPages/Promotions";
import WeekSpecialValue from "./SubPages/WeekSpecialValue";
import MonthBestService from "./SubPages/MonthBestService";
import Signup from "./SubPages/Signup";
import HelpPage from "./SubPages/HelpPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/beautyservice" element={<BeautyPage />} />
      <Route path="/beautytherapy" element={<BeautyTherapyWorking />} />
      <Route path="/cleaningservice" element={<CleaningPage />} />
      <Route path="/automobileservice" element={<AutomobilePage />} />
      <Route path="/engineeringservice" element={<EngineeringPage />} />
      <Route path="/digitalservice" element={<DigitalServicePage />} />
      <Route path="/freeservice" element={<FreeServicePage />} />
      <Route path="/healthsafety" element={<HealthSafety />} />
      <Route path="/aboutus" element={<AboutTomchitt />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/weekspecialvalue" element={<WeekSpecialValue />} />
      <Route path="/monthbestservice" element={<MonthBestService />} />
    </Routes>
  );
};

export default AppRoutes;