import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";

import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {


    const projects = {
      "Covid 19 Tracker": {
        desc:
          "An application which uses ( Used) to Show the spread of the COVID.",
        techStack: "api, PHP, HTML",
        link: "https://github.com/AlparslanAbdikoglu/covid-19-tracker",

      },
      "The Odin Project": {
        desc:
          "A self-learning Resource also known as TOP. The curriculum of The Odin Project covers a wide range of topics and technologies related to web development, including HTML, CSS, JavaScript, Git, databasesThe Odin Project emphasizes hands-on learning through projects. As learners progress through the curriculum.",
        techStack: "Javascript, HTML / CSS, React js",
        link: "https://github.com/AlparslanAbdikoglu/TOP-portfolio",
        open: "https://www.theodinproject.com"
      },
      "Subirat.net": {
        desc:
          ".A website where users can download quality subtitles for their films& tv shows  fully open source.",
        techStack: "MYsql, PHP",
        link:
          "https://subirat.net"
      },
      "GIF Maker": {
        desc:
          "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
        techStack: "Python",
        link: "https://github.com/AlparslanAbdikoglu/GifMaker",
        open: "with this program you can make a gif out of any video you just need to install 2 dependencies and change the abst path! Make sure the video is in the same folder as the python file."
      },
      "Homelab": {
        desc:
          "Homelabs are popular among technology enthusiasts, IT professionals, developers, and hobbyists who want to explore and expand their knowledge in areas such as networking, virtualization, servers, storage, automation, and more.",
        techStack: "Docker, Networking, Python, Linux fundamentals",
        link: "https://github.com/AlparslanAbdikoglu/traefik-as-a-reverse-proxy",
        open: "https://github.com/AlparslanAbdikoglu/traefik-as-a-reverse-proxy"
      },
      "Cyber Security - CTF's": {
        desc:
          "Cybersecurity CTFs cover a wide range of topics within the field, including but not limited to cryptography, web security, network security, reverse engineering, binary exploitation, forensics, and more. Participants may need to analyze code, exploit vulnerabilities, decrypt messages, investigate network traffic, or solve logic puzzles to progress and capture flags.",
        techStack: "Python, Linux OS",
        link: "https://www.hackthebox.com/hacker",
        open: "https://www.hackthebox.com/hacker"
      }
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">/ Projects you need to see! </span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`} key={i}>
                <li className="projects-card">
                  <a href={projects[key]["link"]} target="_blank" className="project-link">
                    <div className="card-header">
                      <div className="folder-icon">
                        <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                      </div>
                      <ExternalLinks
                        githubLink={projects[key]["link"]["url"]}
                        openLink={projects[key]["open"]}
                        target={projects[key]["link"]["target"]}
                      />

                    </div>

                    <div className="card-title">{key}</div>
                    <div className="card-desc">{projects[key]["desc"]}</div>
                    <div className="card-tech">{projects[key]["techStack"]}</div>
                  </a>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
