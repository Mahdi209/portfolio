import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-scroll";

export default function FollowMe() {
  return (
    <div className="followMe-container">
      <h1 className="follow-title">
        <span>Follow</span> Me
      </h1>
      <div className="social">
        <IoLogoLinkedin className="s-media" size={200} />
        <FaFacebook className="s-media" size={200} />
        <AiFillInstagram className="s-media" size={200} />
      </div>

      <footer>
        <h4 id="name">Mohammed Mahdi</h4>
        <div id="link">
          <Link to="home">Home</Link>
          <a className="github" href="https://github.com/Mahdi209">
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}
