import React from "react";

const experienceContent = [
  {
    year: "JAN 2025 - PRESENT",
    position: "Senior Engineering Manager, Azure CXP",
    compnayName: "Microsoft",
    details: ``
    ,
  },
  {
    year: "MAY 2018 - NOV 2018",
    position: "Engineering Manager II, Audience Growth",
    compnayName: "Spotify",
    details: `Served and mentored a team of four world-class software engineers, guiding their efforts in building and maintaining podcast analytics and attribution tools aimed at helping podcast publishers expand their audience + 
    successfully reestablished & rebranded team following Spotify’s acquisition of Chartable.com and facilitated the team’s transition from a startup to a product engineering team within Spotify’s expansive ecosystem.`
    ,
  },
  {
    year: "NOV 2021 - JAN 2023",
    position: "Engineering Manager, Business Funding",
    compnayName: "Twitter",
    details: `Led efforts to build and maintain the business infrastructure that enables funding instruments used by Twitter advertisers to fund their Twitter ad accounts on ads.twitter.com (advertiser-facing) + 
    revived the Business Funding team of three, which previously faced heavy attrition – grew team to a healthy state by conducting interviews, hiring 3 additional highly skilled Full Stack Engineers (including the team’s first female engineer), leading design discussions, personally contributing to the codebase, and participating in on-call rotations. `,
  },
  {
    year: "FEB 2021 - NOV 2021",
    position: "Engineering Manager, Twitter Service",
    compnayName: "Twitter",
    details: `Led a team of 12 engineers to maintain and modernize content moderation tools used by thousands of agents globally, collaborating with cross-functional teams to protect users from harmful content + spearheaded efforts including modernizing legacy tools, migrating API ingests, and implementing 3rd party SaaS integrations.`,
  },
  {
    year: "July 2014 - August 2020",
    position: "Software Engineer, Core Technology Team",
    compnayName: "Delta Air Lines",
    details: `Developed and enhanced software in C, C++, Assembly (BAL), and SabreTalk for IBM z/TPF systems within Delta's Flight Inventory and Schedules codebase, implementing new features and efficiency improvements in an agile Kanban environment. Conducted code reviews for team members, delivered high-quality code through rigorous testing, and adhered to airline programming guidelines to ensure secure and efficient code, while analyzing system performance to identify and resolve issues.`
    ,
  },
  {
    year: "July 2013 - July 2014",
    position: "Software Engineer, Deltamatic",
    compnayName: "Travelport",
    details: `Engineered and optimized TPF software applications by converting business requirements into robust technical designs on IBM TPF mainframe systems. Authored efficient code in C++, BAL, and SabreTalk, and developed schemas for IBM DB2 databases, ensuring high performance, system reliability, and data integrity. Resolved technical issues promptly and delivered consistent support, ensuring all problem reports were followed up to completion. `,
  },
  {
    year: "SEP 2012 - DEC 2012",
    position: "Intern, Software Engineer, Enterprise Architecture",
    compnayName: "Travelport",
    details: `Designed and developed a Process Viewing Environment (PVE) for Travelport’s Enterprise Architecture team using Microsoft SharePoint, with custom C#, JavaScript, HTML, and CSS code, to create a central collaboration hub for Business Process Management and a comprehensive training resource for enterprise architects.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
