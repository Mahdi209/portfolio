import myPhoto from "../assets/myPhoto.png";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <div id="hero-section">
      <div>
        <h3 className="title">
          I AM <span>DEVELOPER</span> MOHAMMED MAHDI
        </h3>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          efficitur nibh sit amet luctus sodales. Quisque nec feugiat dolor, ut
          rhoncus orci. Mauris eget pulvinar libero
        </p>
        <Link to="contact">
          <div className="contact-btn"> Contact Me</div>
        </Link>
      </div>
      <img src={myPhoto} id="myPhoto" alt="this img is not found" />
    </div>
  );
}
