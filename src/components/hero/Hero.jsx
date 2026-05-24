import React, { useState } from "react";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.jpg";
import Image from "next/image";

const heroContent = {
  heroImage: "/assets/img/hero/dark.jpg",
  heroMobileImage: heroImgMobile,
  heroTitleName: "Tony Scott,",
  heroDesignation: "Software Engineering Leader",
  heroDescriptions: `I’m an Atlanta based software engineer and engineering leader building AI powered cloud platforms and distributed systems at enterprise scale. I specialize in Azure, C#, .NET, TypeScript, React, Elixir, and modern AI technologies including Azure OpenAI, Semantic Kernel, MCP servers, Claude, Codex, and Copilot CLIs. Experienced across Microsoft, Spotify, Twitter, Delta Air Lines, and Travelport, I thrive in both hands on engineering and technical leadership roles.`,
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
                <a className="button" href="https://drive.google.com/file/d/1lYvyo2cwPEqwJDeavbFgZLDJTn4zj7b8/view?usp=sharing" download>
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
