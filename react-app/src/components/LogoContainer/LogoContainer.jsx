import React, {Component} from 'react';
import LogoSubtitle from "./LogoSubtitle/LogoSubtitle";
import Description from "./Description/Description";
import Value from "./Value/Value";
import Logo from "./Logo/Logo";
import './LogoContainer.css';

class LogoContainer extends Component {
     render() {
         return [
             <div className="logo-container">
                 <Logo logo="A" />
                 <LogoSubtitle subtitle="websites"/>
                 <Value text="Starts from $350"/>
                 <Description text="I develop responsive websites, meaning your website will look good on any devise, whether it is a computer, mobile or tablet."/>
             </div>,
             <div className="logo-container">
             <Logo logo="B"/>
             <LogoSubtitle subtitle="identity"/>
             <Value text="Starts from $140"/>
             <Description text="Creating a great brand image requires a full understanding of your business, target market and existing clientele"/>
             </div>,
             <div className="logo-container">
                 <Logo logo="C"/>
                 <LogoSubtitle subtitle="print"/>
                 <Value text="Starts from $140"/>
                 <Description text="I love print. I believe the selection of quality material is just as important as the design: It adds value to your brand."/>
             </div>,
            <div className="logo-container">
                 <Logo logo="D"/>
                 <LogoSubtitle subtitle="user interface"/>
                 <Value text="Starts from $190"/>
                 <Description text="I love to create minimalist and clean UX/UI. I'm a strong believer that minimalism is the key to a great user interface"/>
             </div>
         ]
     }
 }


export default LogoContainer;
