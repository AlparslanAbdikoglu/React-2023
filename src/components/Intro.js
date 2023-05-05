import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hey Stranger, "}
            <span className="intro-name">{"Alparslan"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I create stuff on the web</div>
          <div className="intro-desc">
            I'm a software engineer and Crypto trader you can find me around Budapest or Tokyo [] I have great
            interest in research & development artificial Intelligence, Blockchain, International Relations
            mixed with Cyber Sercurity, and everything in between.
          </div>
          <a
            href="mailto:alparslanabdik@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Connect with me on Linked In!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
