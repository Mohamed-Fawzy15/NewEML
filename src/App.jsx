import "./App.css";
import AboutUs from "./component/About Us/AboutUs";
import AbuHeiba from "./component/Categroies/AbuHeiba/AbuHeiba";
import Categroies from "./component/Categroies/Categroies";
import FindUs from "./component/Find Us/FindUs";
import HomePage from "./component/Home/HomePage";
import ContactUs from "./component/Contact/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-holder">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="find" element={<FindUs />} />
        <Route path="/categroies" element={<Categroies />} />
        <Route path="categroies/:id" element={<AbuHeiba />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
