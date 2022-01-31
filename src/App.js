// import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import BannerComponent from './components/sections/BannerComponent';
import AboutUsComponent from './components/sections/AboutUsComponent';
import ServicesComponent from './components/sections/ServicesComponent';
import LatestStoriesComponent from './components/sections/LatestStoriesComponent';
import SocialImpactComponent from './components/sections/SocialImpactComponent';
import TestimonialComponent from './components/sections/TestimonialComponent';
// import BlogComponent from './components/sections/BlogComponent';
import ContactUsComponent from './components/sections/ContactUsComponent';

function App() {
  return (
    <div>
     <HeaderComponent/>
      <div className="wrapper">
        <BannerComponent/>
        <AboutUsComponent/>
        <ServicesComponent/>
        <LatestStoriesComponent/>
        <SocialImpactComponent/>
        <TestimonialComponent/>
        {/* <BlogComponent/> */}
        <ContactUsComponent/>
        

      </div>

     <div>
     <FooterComponent/>
     </div>
    </div>
  );
}

export default App;
