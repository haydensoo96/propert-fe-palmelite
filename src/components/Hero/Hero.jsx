import "./Hero.css";
import { useCheckMobileScreen } from "../../utils/common";

const Hero = () => {
  return (
    <section style={{ display: "flex", background: "#EAE6DF" }}>
      <div className="flexColCenter image-container">
        <img src="./palm_assets/hero-title-2.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
