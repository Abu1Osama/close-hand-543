import './App.css';
// import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Allroutes from './Component/Allroutes';
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
// import Navbarfinal from './Component/Navbarfinal';
import { Nav } from './Component/Nav';

function App() {
  return (
    <>
        <BrowserRouter>
     {/* <Navbarfinal/> */}
        
{/* <Navbar/> */}

     <Nav/>

<Allroutes/>

<Footer/>
  
     </BrowserRouter>
    </>
  );
}
export default App;
