import { Carousel } from "nuka-carousel";
import Navbar from "./Navbar";
import "./Header.css";
function Header() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <Carousel
        autoplay
        showDots
        wrapAround
        pauseOnHover
        autoplayInterval={3000}
      >
        <div className="slide">
          <img src="src/media/header001.png" alt="Banner1" />
        </div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    </>
  );
}

export default Header;
