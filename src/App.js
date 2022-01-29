// import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import BannerComponent from './components/sections/BannerComponent';
import AboutUsComponent from './components/sections/AboutUsComponent';
import ServicesComponent from './components/sections/ServicesComponent';
import TeamComponent from './components/sections/TeamComponent';

function App() {
  return (
    <div>
     <HeaderComponent/>
      <div className="wrapper">
        <BannerComponent/>
        <AboutUsComponent/>
        <ServicesComponent/>
        <TeamComponent/>

      </div>

     <div>
     <FooterComponent/>
     </div>
    </div>
  );
}

export default App;
