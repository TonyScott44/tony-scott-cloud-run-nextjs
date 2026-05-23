import React, { useState } from "react";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.jpg";
import Image from "next/image";

const heroContent = {
  heroImage: "/assets/img/hero/dark.jpg",
  heroMobileImage: heroImgMobile,
  heroTitleName: "Tony Scott",
  heroDesignation: "Software Engineering Manager",
  heroDescriptions: `I’m an Atlanta based software engineer and engineering leader focused on building cloud scale distributed systems, AI powered platforms, and high performance engineering organizations. With experience spanning Microsoft, Spotify, Twitter, Delta Air Lines, and Travelport, I specialize in architecting resilient full stack and backend systems using Azure, C#, .NET, TypeScript, React, Elixir, distributed cloud architectures, and modern AI frameworks.

  My recent work centers around agentic AI systems, secure vectorized knowledge platforms, orchestration frameworks, and AI assisted software development lifecycles leveraging Azure OpenAI, Semantic Kernel, MCP servers, Claude, Codex, and Copilot technologies. I thrive at the intersection of deep technical execution, platform architecture, operational excellence, and engineering leadership, whether driving hands on development as an IC or leading teams through complex large scale initiatives.

I’m passionate about building intelligent systems that scale, modernizing engineering workflows through AI, and empowering teams to deliver world class products with measurable business impact.`,
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
