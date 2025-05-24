import React from "react";
import aboutMeImage from "../assets/image 25.png";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleMoreAboutMeClick = () => {
    navigate("/about-me"); // Navigate to the AboutMe page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
  };

  return (
    <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 py-12 md:px-20 lg:px-24 border-b border-[#C7C7C7] pb-14">
      {/* Left: Large "ABOUT ME" */}
      <div className="text-[#F5F5F5] lg:mb-60 font-Bebas hidden md:block text-[50px] md:text-[80px] lg:text-[90px] leading-none">
        ABOUT ME
      </div>

      {/* Right: Header, Paragraph, and Button */}
      <div className="flex flex-col gap-6 lg:w-1/2 font-Manrope">
        <h2 className="text-[30px] hidden md:block  text-[#FFFFFF]">
          I am a front-end developer based in Sydney. Has Mechanical Engineering
          background.
        </h2>
        <p className="text-[16px] text-[#C7C7C7] leading-relaxed hidden md:block">
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I’m exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill.
        </p>
        <p className="text-[16px] text-[#C7C7C7] leading-relaxed  md:hidden">
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing.
        </p>

        <button
          onClick={handleMoreAboutMeClick}
          className=" text-[#D3E97A] font-bold py-3  text-left underline uppercase transition-all"
        >
          More About Me
        </button>

        <img className="lg:hidden" src={aboutMeImage} alt={aboutMeImage} />
      </div>
    </section>
  );
};

export default About;
