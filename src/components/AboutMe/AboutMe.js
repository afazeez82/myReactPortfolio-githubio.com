import React from "react";
import portfolio from "../../utils/myphoto_c copy.jpg";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src={portfolio} alt="profile_photo" className="img" />
        <h1>Anees Azeez</h1>
        <div className="subtitle">
          <h3></h3>
          <p>
          Responsible for leading software engineering teams for successful delivery of Quality products. Experience in delivering complex applications. Owning the complete software lifecycle from development to devops. Also served as the production delivery lead supporting complex provider domain systems. Owning the stability and reliability of large complex applications of the provider domain. Managing production troubleshooting activities including production incidents and war rooms(priority 1 and 2 incidents). Leading the development of automation and scripts to develop production environments. Leading the initiative to increase the monitoring capabilities making a huge impact on reducing mean time to detect and mean time to restore. Improved faster incident resolutions, better communication during war rooms, Increased application performance and Efficiency Specialties: Product Increments, Process Improvements, Agile methodology, Product increment planning, Github, jenkins, Splunk, new relic, Quality Control, Quality Assurance, QA planning, Product testing, QA scrums, Estimations, Web service Testing using Soap UI and Soap UI Pro, Load runner with Web and Tru Client Protocol. Also worked on Visual studio automation tool with coded UI tests and UI libraries.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
