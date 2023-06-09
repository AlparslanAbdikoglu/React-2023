import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am currently a <b>Software Engineer</b> at
        <a href="https://cashierbasket.com" target="blank"> CashierBasket </a>,working in the frontend side of things.
        We are a startup located in the ❤️ of Europe. <br></br>I studied International Relations but currently changing majors.
        <b>I'm newly enrolled </b>at{" "}
        <a href="https://www.iu.org/bachelor/cyber-security/" target="blank">International University of Applied Sciences</a>. Studying <b style={{ color: "#fe5018" }}>Cyber Security</b>
.
      </p>
    );
    const two = (
      <p>
       Outside of work, I'm interested in following the developments of AI, financial markets, and cyber security. In my spare time,  I enjoy being part of a big community on Discord where I'm a community moderator. I also participating in  <b style={{ color: "#fe5018" }}> CTF (Capture the Flag) games,</b> testing my skills and knowledge against other cybersecurity enthusiasts."
      </p>
    );

    const tech_stack = [
      "*Javascript",
      "Python",
      "*React.js",
      "Flutter",
      "*Node.js",
      "HTML &TailwindCSS"
    ];


    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/WhoAmi</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with and deepening my knowledge*:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
