import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Allroutes from './Component/Allroutes';
import { BrowserRouter } from "react-router-dom";
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
