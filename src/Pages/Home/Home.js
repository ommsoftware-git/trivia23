import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BannerBottom from "../Banner-bottom-btn/BannerBottom";
import Blog from "../Blog/Blog";
import Contract from "../Contract/Contract";
import DownloadApps from "../DownloadApps/DownloadApps";
import FAQNewsLetter from "../FAQNewsLetter/FAQNewsLetter";
import Services from "../Services/Services";
import Testmonials from "../Testmonials/Testmonials";
import WhatsApp from "../whats-app/WhatsApp";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerBottom></BannerBottom>
      <Services></Services>

      <About></About>
      {/* <Contract></Contract> */}
      {/* <Blog></Blog> */}
      <Testmonials></Testmonials>
      <DownloadApps></DownloadApps>
      <FAQNewsLetter></FAQNewsLetter>
      <WhatsApp />
    </div>
  );
};

export default Home;
