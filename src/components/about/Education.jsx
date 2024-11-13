import React from "react";

const educationContent = [
  {
    year: "2018",
    degree: "FULL STACK FLEX WEB DEVELOPMENT CERTIFICATE",
    institute: "GEORGIA INSTITUTE OF TECHNOLOGY",
    details: `Through a fast-paced and immersive coding bootcamp, obtained the skills needed to become proficient in front-end and back-end technologies including, but not limited to: Git, JavaScript, jQuery, Node.js, Express.js, React.js, MongoDB, Mongoose, MySQL, Google Firebase, HTML5, CSS3, Bootstrap, Materialize, Ajax, Axios, and OAuth2.`,
  },
  {
    year: "2016",
    degree: "MASTERS DEGREE",
    institute: "CAPELLA UNIVERSITY",
    details: `Information Systems and Technology Management (ISTM)`,
  },
  {
    year: "2012",
    degree: "BACHELORs DEGREE ",
    institute: "DeVry University",
    details: `Technical Management, Concentration in Business Information Systems`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
