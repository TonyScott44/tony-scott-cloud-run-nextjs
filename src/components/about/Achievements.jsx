import React from "react";

const achievementsContent = [
  { title: "10", subTitle1: "years of", subTitle2: "experience" },
  { title: "3", subTitle1: "Engineering", subTitle2: "Management" },
  { title: "7", subTitle1: "Software", subTitle2: "Development (IC)" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
