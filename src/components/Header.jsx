import { Carousel } from "nuka-carousel";
import Navbar from "./Navbar";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <Carousel autoplay autoplayInterval={1000} showArrows wrapMode="wrap">
            <Navbar></Navbar>
            <img className="carousel-image" src="src/media/header005.png"></img>
            <img className="carousel-image" src="src/media/header004.png"></img>
            <img className="carousel-image" src="src/media/header003.png"></img>
            <img className="carousel-image" src="src/media/header002.png"></img>
            <img className="carousel-image" src="src/media/header001.png"></img>
          </Carousel>
        </div>
      </header>
    </>
  );
}

export default Header;
