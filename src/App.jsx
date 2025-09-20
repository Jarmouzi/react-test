import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page";
import FAQPage from "./pages/FAQ.page";
import AboutUsPage from "./pages/AboutUs.page";
import ContactUsPage from "./pages/ContactUs.page";

function App() {
  return (
    <div>
        <NavbarComponent>

        </NavbarComponent>
        <div className="wrapper">
          <h2>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/faq" element={<FAQPage />}/>
              <Route path="/about-us" element={<AboutUsPage />}/>
              <Route path="/contact-us" element={<ContactUsPage />}/>
            </Routes>
          </h2>
        </div>        

        <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
