import React from "react";

const experienceContent = [
  {
    year: "JAN 2026 - PRESENT",
    position: "Senior Software Engineer, Azure EngOps",
    compnayName: "Microsoft",
    details: `Architecting and developing AI powered cloud platforms on Azure using C#, .NET, TypeScript, React, Elixir, Azure OpenAI, Azure Functions, Azure SQL, and distributed cloud architectures. 
    Leading engineering efforts across six enterprise products supporting thousands of internal users, driving platform resiliency, tenant migrations, and enterprise scale security and compliance 
    initiatives spanning GDPR, accessibility, identity/authentication, and secure PaaS governance. Building agentic AI systems and developer workflows leveraging Semantic Kernel, vector databases, 
    MCP servers, and AI powered orchestration frameworks to automate SDLC processes, operational workflows, and intelligent support experiences including AI generated case summaries and suggested 
    answers. Also driving reliability engineering initiatives through SLIs, observability, and p95 latency and availability monitoring across platforms processing 20k+ support cases monthly.`
    ,
  },
  {
    year: "JAN 2025 - DEC 2025",
    position: "Senior Engineering Manager, Azure EngOps",
    compnayName: "Microsoft",
    details: `Led two engineering teams building AI powered supportability and operational platforms on Azure using C#, .NET, TypeScript, React, Azure OpenAI, Azure SQL, and distributed cloud architectures
    supporting 40k+ internal users and processing 20k+ support cases monthly. Drove secure multi-tenant collaboration workflows through Microsoft Teams based swarming platforms, proactive group chat orchestration, 
    SME scheduling, JIT access controls, and centralized management experiences. Led platform resiliency and security modernization initiatives including migration from Azure Traffic Manager to Azure Front Door, 
    implementation of SLIs and observability systems for p95 latency and availability monitoring, and adoption of Azure OpenAI with Semantic Kernel to power intelligent case summaries, suggested answers, and secure 
    vectorized AI knowledge experiences that maintained a 98% CSAT score.`
    ,
  },
  {
    year: "MAY 2023 - NOV 2023",
    position: "Engineering Manager II, Audience Growth",
    compnayName: "Spotify",
    details: `Led and mentored a high performing engineering team focused on podcast analytics, attribution, and audience growth platforms used by publishers to measure engagement and optimize listener acquisition 
    across Spotify’s podcast ecosystem. Helped lead the organizational transition following Spotify’s acquisition of Chartable, reestablishing team identity, scaling engineering processes, and evolving the organization 
    from startup operations into a mature product engineering function within Spotify. Drove technical strategy, cross-functional collaboration, hiring, mentorship, and operational excellence while contributing hands 
    on to architecture discussions, distributed systems design, and product delivery.`
  ,
  },
  {
    year: "NOV 2021 - JAN 2023",
    position: "Engineering Manager, Business Funding",
    compnayName: "Twitter",
    details: `Led and scaled the engineering team responsible for the business funding infrastructure powering advertiser payments and funding instruments across Twitter Ads. Revitalized a high attrition team by hiring 
    and mentoring full stack engineers, strengthening engineering culture, and driving operational stability across critical revenue impacting systems. Led architecture discussions, contributed hands on to the codebase, 
    participated in on call rotations, and partnered cross functionally to improve reliability, scalability, and developer execution within Twitter’s advertising platform ecosystem.`,
  },
  {
    year: "FEB 2021 - NOV 2021",
    position: "Engineering Manager, Twitter Service",
    compnayName: "Twitter",
    details: `Led a team of 12 engineers responsible for modernizing large scale content moderation and trust and safety platforms used by thousands of agents globally. Drove migration of legacy systems to scalable cloud 
    and SaaS based architectures while partnering cross functionally to improve platform reliability, operational efficiency, and user safety. Designed and implemented Thorn’s Safer CSAM detection integration processing 
    50M to 100M images daily using Scala, Docker, Kafka, Thrift RPC, and Pub/Sub architectures to reduce harmful content across the platform. Also led frontend modernization efforts for Twitter Spaces moderation 
    experiences using React, improving usability and operational workflows following the Periscope platform transition.`,
  }, 
  {
    year: "July 2014 - August 2020",
    position: "Software Engineer, Core Technology Team",
    compnayName: "Delta Air Lines",
    details: `Developed and enhanced high performance backend systems for Delta’s Flight Inventory and Scheduling platforms using C, C++, Assembly (BAL), SabreTalk, z/TPF, TPFDF, and flat file database architectures within 
    large scale IBM mainframe environments. Built and optimized systems supporting flight operations, passenger re-accommodation, gate management, and terminal demand workflows processing millions of operational events 
    daily. Improved platform reliability and engineering efficiency through performance optimization, automated tooling, code reviews, and system modernization efforts, while delivering operational enhancements that reduced 
    passenger wait times and improved agent productivity across airport operations.`
    ,
  },
  {
    year: "July 2013 - July 2014",
    position: "Software Engineer, Deltamatic",
    compnayName: "Travelport",
    details: `Developed and optimized high performance airline and travel systems using C, C++, Assembly (BAL), SabreTalk, IBM DB2, z/TPF, and TPFDB technologies within large scale IBM mainframe environments. Built backend 
    services and database solutions supporting flight inventory and airport operations workflows while improving platform reliability, operational efficiency, and downstream data processing. Delivered automation and tooling 
    enhancements that reduced abusive flight bookings, improved analyst visibility into operational data, and modernized batch processing workflows handling hundreds of thousands of records daily. `,
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
