/* eslint-disable prettier/prettier */
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import HeroSection from "./Hero";
import Projects from "./Projects";
 

const HomagePage = () => {
  return (
    <div>
      <HeroSection />
      <About/>
      <Experience/>
      <Projects/>
      <Education/>
    </div>
  );
};

export default HomagePage;
