import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Allroutes from './Component/Allroutes';
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

function App() {
  return (
    <>
        <BrowserRouter>
        
<Navbar/>
<Allroutes/>
<Footer/>
  
     </BrowserRouter>
    </>
  );
}
export default App;
