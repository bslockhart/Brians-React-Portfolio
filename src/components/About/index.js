import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Brian Lockhart. I am currently enrolled in coding bootcamp at The University of North Carolina. My goal is to be an award winning Full Stack Developer and UI/UX enthusiast. I am currently working on developing the knowledge and front-end-techniques required to create visually appealing websites. I love structure and order and also believe in quality. I love spending time on the little details that optimize design. Also, I enjoy being a part of a team. Feel free to check out my most recent projects in my work section. Also, please take a look at my resume to see my background and experience.</p>
        </div>
      </div>
    </section >
  );
}

export default About;
