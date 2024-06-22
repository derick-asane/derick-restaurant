import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about__spoon" className="spoon__img" />
        <p className="p__opensans">
          The git add command adds a change in the working directory to the
          staging area. It tells Git that you want to include updates to a
          particular file in the next commit.
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about__spoon" className="spoon__img" />
        <p className="p__opensans">
          The git add command adds a change in the working directory to the
          staging area. It tells Git that you want to include updates to a
          particular file in the next commit.
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
