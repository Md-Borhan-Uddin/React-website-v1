
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DropdownNavbar from './components/dropdownnavbar/DropdownNavbar';
import Slider from './components/heroSection/Slider';
import { SliderData } from './components/heroSection/SliderData';
import InfoSection from './components/infoSection/InfoSection';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isScroll, setIsScroll] = useState(false)
  window.addEventListener("scroll", ()=>{
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        return setIsScroll(true)
      }else{
        return setIsScroll(false)
      }
  })
  const scrollHandle = ()=>{
    console.log("click");
    document.documentElement.scrollTop = 0;
  }
  return (
    <BrowserRouter>
       <DropdownNavbar isScroll={isScroll}/>
       <Slider slider={SliderData}/>
       <InfoSection />

       {isScroll && <ScrollToTop scrollHandle={scrollHandle} />}
       
    </BrowserRouter>
     
    
  );
}

export default App;
