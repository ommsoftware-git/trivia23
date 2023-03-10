import Home from "./Pages/Home/Home";
import Main from "./Pages/Main/Main";
import SingUp from "./Pages/Ragister/SingUp/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Packages from "./Pages/Packages/Packages";
import Chackout from "./Pages/Chackout/Chackout";
import TransPaymentForm from "./Pages/Chackout/TransPaymentForm";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Termsandconditions from "./Pages/Termsandconditions/Termsandconditions";
import Privacypolicy from "./Pages/Privacypolicy/Privacypolicy";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Blog from "./Pages/Blog/Blog";

// import About from '../About/About';
// import ParentPackage from "./Pages/Packages/ParentPackage";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Home />} />
        <Route path="/landing#home" element={<Header />} />
        <Route path="/landing#about" element={<About />} />
        <Route path="/landing#services" element={<Services />} />
        <Route path="/landing#blog" element={<Blog />} />
        <Route path="/landing#contract" element={<Footer />} />
        <Route path="singUp" element={<SingUp />} />
        <Route path="package" element={<Packages />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="termsandconditions" element={<Termsandconditions />} />
        <Route path="privacypolicy" element={<Privacypolicy />} />
        <Route path="chackout" element={<Chackout />} />
        <Route path="payment" element={<TransPaymentForm />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
