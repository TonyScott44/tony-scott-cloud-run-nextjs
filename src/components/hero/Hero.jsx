import React, { useState } from "react";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.jpg";
import Image from "next/image";

const heroContent = {
  heroImage: "/assets/img/hero/dark.jpg",
  heroMobileImage: heroImgMobile,
  heroTitleName: "Tony Scott",
  heroDesignation: "Software Engineering Manager",
  heroDescriptions: `I'm an Atlanta-based software engineering manager dedicated to leading full-stack product teams to deliver transformative results. I excel in driving operational excellence, optimizing system architecture for scalability and efficiency, and achieving measurable cost savings. With a relentless focus on innovation, team empowerment, and strategic impact, I build high-performing teams that deliver world-class products and solutions.`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{ backgroundImage: `url(${heroContent.heroImage})` }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <Image
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
              // style={{width:'100%',height:'100%'}}
            />
            <h1 className="text-uppercase poppins-font">
              {"I'm"} {heroContent.heroTitleName}
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <div className="col-12 mt-1">
                <a className="button" href="https://drive.google.com/file/d/1Aj4JS3slAdO9s4YbVd11sucqIzfzLTmn/view?usp=drive_link" download>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
          </div>
        </div>
      </div>
      {/* End home-details-container */}
    </>
  );
};

export default Hero;
