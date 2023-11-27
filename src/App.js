import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import Careers from "./pages/Careers";
import ConstructionPage from "./pages/ConstructionPage";
import ContactUs from "./pages/ContactUs";
import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment";
import DentalPage from "./pages/Dental";
import DigitalTransformation from "./pages/DigitalTransformation";
import FinTechPage from "./pages/FinTech";
import HealthcarePage from "./pages/Healthcare";
import ITConsulting from "./pages/ITConsulting";
import InsurancePage from "./pages/Insurance";
import LogisticsAndAutomotivePage from "./pages/LogisticsAndAutomotive";
import Principles from "./pages/Principles";
import RetailAndECommercePage from "./pages/RetailAndECommerce";
import Staffing from "./pages/Staffing";
import TravelAndHospitality from "./pages/TravelAndHospitality";

function App() {
  return (<Routes>
  <Route path='/' element={<About/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/principles' element={<Principles/>}/>
  <Route path='/careers' element={<Careers/>}/>
  <Route path='/contactus' element={<ContactUs/>}/>
  <Route path='/software' element={<CustomSoftwareDevelopment/>}/>
  <Route path='/digital' element={<DigitalTransformation/>}/>
  <Route path='/consulting' element={<ITConsulting/>}/>
  <Route path='/staffing' element={<Staffing/>}/>
  <Route path='/construction' element={<ConstructionPage/>}/>
  <Route path='/travel' element={<TravelAndHospitality/>}/>
  <Route path='/retail' element={<RetailAndECommercePage/>}/>
  <Route path='/healthcare' element={<HealthcarePage/>}/>
  <Route path='/dental' element={<DentalPage/>}/>
  <Route path='/insurance' element={<InsurancePage/>}/>
  <Route path='/fintech' element={<FinTechPage/>}/>
  <Route path='/logistics' element={<LogisticsAndAutomotivePage/>}/>       
</Routes>);
}

export default App;
