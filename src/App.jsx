import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
// import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PolicyPage";
import FAQPage from "./pages/FAQPage";
import BookAppointment from "./pages/BookAppointment";

import ElevenLabsBot from "./components/ElevenLabsBot"; 
import ServiceDetailPage from "./pages/ServiceDetailPage";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
             <Route path="services/:slug" element={<ServiceDetailPage />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/BookAppointment" element={<BookAppointment />} />
            <Route path="/PolicyPage" element={<PrivacyPolicy />} />
            <Route path="/FAQ" element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />

        {/* ✅ Chatbot always visible */}
        <ElevenLabsBot />
      </div>
    </Router>
  );
}


























// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// // import Contact from "./pages/Contact";
// import PrivacyPolicy from "./pages/PolicyPage";
// import FAQPage from "./pages/FAQPage";
// import BookAppointment from "./pages/BookAppointment";
// import ElevenLabsBot from "./components/ElevenLabsBot";

// export default function App() {
//   return (
    
//     <Router>
      
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             {/* <Route path="/contact" element={<Contact />} /> */}
//             <Route path="/BookAppointment" element={<BookAppointment />} />
//             <Route path="/PolicyPage" element={<PrivacyPolicy />} />
//             <Route path="/FAQ" element={<FAQPage />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

