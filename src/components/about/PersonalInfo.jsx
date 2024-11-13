import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Anthony", hasColor: "" },
  { meta: "last name", metaInfo: "Scott", hasColor: "" },
  { meta: "Open to Work", metaInfo: "Available", hasColor: "green" },
  { meta: "Email", metaInfo: "tonyscottii.dev@gmail.com", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;