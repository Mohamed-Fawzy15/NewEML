import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy load the components
const HomePage = React.lazy(() => import("./component/Home/HomePage"));
const AboutUs = React.lazy(() => import("./component/About Us/AboutUs"));
const FindUs = React.lazy(() => import("./component/Find Us/FindUs"));
const Categroies = React.lazy(() =>
  import("./component/Categroies/Categroies")
);
const AbuHeiba = React.lazy(() =>
  import("./component/Categroies/AbuHeiba/AbuHeiba")
);
const ContactUs = React.lazy(() => import("./component/Contact/Contact"));

function App() {
  return (
    <div className="app-holder">
      {/* Suspense to display a fallback while components are being loaded */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="find" element={<FindUs />} />
          <Route path="/categroies" element={<Categroies />} />
          <Route path="categroies/:id" element={<AbuHeiba />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
