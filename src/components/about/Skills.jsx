import React from "react";

const skillsContent = [
  { skillClass: "p85", skillPercent: "85", skillName: "AZURE CLOUD"},
  { skillClass: "p90", skillPercent: "90", skillName: "AGENTIC CODING CLIS + TOOLS (EX. CLAUDE, COPILOT, CODEX)" },
  { skillClass: "p75", skillPercent: "75", skillName: "C# + .NET" },
  { skillClass: "p85", skillPercent: "85", skillName: "NODE.JS" },
  { skillClass: "p90", skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: "p85", skillPercent: "85", skillName: "TYPESCRIPT" },
  { skillClass: "p85", skillPercent: "85", skillName: "REACT" },
  { skillClass: "p75", skillPercent: "75", skillName: "NEXT.JS" },
  { skillClass: "p95", skillPercent: "95", skillName: "HTML + CSS" },
  { skillClass: "p70", skillPercent: "70", skillName: "C++ (IBM zTPF)" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
