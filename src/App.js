import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";
import MoreAboutMe from "./components/MoreAboutMe";
import ContactMe from "./components/ContactMe";
import FollowMe from "./components/FollowMe";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Fullpage>
        <FullPageSections>
          <FullpageSection>
            <NavBar />

            <HeroSection id="home" />
          </FullpageSection>
          <FullpageSection>
            <Project id="project" />
          </FullpageSection>
          <FullpageSection>
            <MoreAboutMe id="about" />
          </FullpageSection>

          <FullpageSection>
            <ContactMe id="contact" />
          </FullpageSection>

          <FullpageSection>
            <FollowMe id="FollowMe" />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default App;
