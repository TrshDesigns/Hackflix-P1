import { Carousel } from "nuka-carousel";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
      <Carousel autoplay showDots>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    </>
  );
}

export default Header