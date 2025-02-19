/* eslint-disable prettier/prettier */
import About from "./About";
import Education from "./Education";
import SkillsSection from "./Skills";
import HeroSection from "./Hero";
import Projects from "./Projects";

const HomagePage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <SkillsSection />
      <Projects />
      <Education />
    </div>
  );
};

export default HomagePage;
