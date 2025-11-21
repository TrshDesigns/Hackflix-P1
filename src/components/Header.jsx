import { Carousel } from "nuka-carousel";
import Navbar from "./Navbar";

//PENDIENTE INSERTAR IMAGENES PARA CAROUSEL
//LEER DOCUMENTACION DE NUKA CAROUSEL

function Header() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <Carousel autoplay showDots>
        <div className="header-carousel-div"></div>
        <div className="header-carousel-div"></div>
        <div className="header-carousel-div"></div>
      </Carousel>
    </>
  );
}

export default Header;
