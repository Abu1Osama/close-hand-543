import "./App.css";
import Footer from "./Component/Footer";
import Allroutes from "./Component/Allroutes";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Nav } from "./Component/Nav";
import { useState } from "react";

function App() {
  const[data1,setData1]=useState("sarees")
const abcd=() =>{
  setData1("bra")
}


const abcd1=() =>{
  setData1("sarees")
}
const abcd2=() =>{
  setData1("shirt")
}
const abcd3=() =>{
  setData1("jeans")
}


  return (
    <>
      <BrowserRouter>
        <Nav 
        call={abcd}
        sarees={abcd1}
        shirt={abcd2}
        jeans={abcd3}
        />

        <Allroutes 
        pro={data1}
        />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
