import React, { Component } from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Pin from '../Pin/Pin';
import LogoContainer from "../LogoContainer/LogoContainer";
import './App.css';


class App extends Component {
  render() {
    return [
      <div className="head-section">
        <Section className="head-section">
         <Title
          label="i am just another creative guy"
          className="head-title"
              />
              <Subtitle>
              <span> who can build memorable creative  </span>
              <span className="head-subtitle-tail"> experiece for you </span>
              </Subtitle>
              <div className="pin-section">
              <Pin letter="A"/>
              <Pin letter="B"/>
              <Pin letter="C"/>
              <Pin letter="D"/>

             </div>
          </Section>
      </div>,
      <div className="lower-section">
          <Section className="lower-section">
            <Title
            label="what i do"
            className="lower-head-title"
          />
                <Subtitle>
                   <span className="lower-head-subtitle">I specialize in creating inspirational websites, logos, brochures and app UX/UI for great individuals and small to large sized companies across the world helping them to market their business successfully.</span>
                </Subtitle>
            <div className="tail-section"></div>
          </Section>
          <LogoContainer/>
          </div>



    ]
  }
}

export default App;
