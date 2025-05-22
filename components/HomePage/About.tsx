/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
import Image from "next/image";
import aboutImage from "@/public/hero_image2.png";

const About = () => {
  return (
    <section className="relative py-20 bg-white dark:bg-gray-950 text-gray-300 dark:text-gray-200 overflow-hidden">
  {/* Gradient Overlay (Top-Right Corner with deeper color effect) */}
  <div className="absolute top-[15%] dark:block hidden left-0 w-full md:w-[60%] h-[80%] md:h-[500px] bg-gradient-to-br from-[#011f47] via-[#042968] to-transparent opacity-70 blur-3xl rounded-full"></div>

  <div className="max-w-[1300px] flex-col-reverse mx-auto md:px-5 px-4 flex md:flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
    {/* Left Side - About Text */}
    <div className="lg:w-7/12">
      {/* "About Me" Section */}
      <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">About Me</h2>
      <div className="w-16 h-1 rounded-full bg-indigo-500 mt-2"></div>

      {/* Main Title */}
      <h3 className="text-2xl md:text-5xl font-semibold text-gray-900 dark:text-white mt-6">
        Building Next-Level Digital Solutions Together
      </h3>

      {/* Detailed Description */}
      <p className="mt-6 text-base md:text-lg leading-7 text-gray-600 dark:text-gray-400">
        Hello! I'm{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">Saroar Jahan</span>, a
        passionate MERN Stack & Frontend Developer dedicated to crafting
        dynamic, scalable, and engaging web applications. My expertise lies
        in creating clean, responsive, and user-friendly interfaces that
        deliver seamless experiences.
      </p>

      <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
        With a strong foundation in{" "}
        <span className="font-medium text-gray-800 dark:text-gray-200">
          React.js, Next.js, Tailwind CSS, Firebase, MongoDB, and Express.js
        </span>
        , I take pride in transforming ideas into functional,
        high-performance digital solutions. Whether it’s a startup project
        or a large-scale application, I enjoy optimizing workflows and
        enhancing user engagement.
      </p>

      {/* Personal Info */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2  gap-5 text-gray-600 dark:text-gray-400">
        <div className="border-b  border-gray-300 dark:border-gray-700 pb-2">
          <span className="text-gray-800  dark:text-gray-300">Full Name:</span> MD. Saroar Jahan
          (Bappy)
        </div>
        <div className="border-b  border-gray-300 dark:border-gray-700 pb-2">
          <span className="text-gray-800  dark:text-gray-300">Email:</span>{" "}
          muhammadbappy989@gmail.com
        </div>
        <div className="border-b  border-gray-300 dark:border-gray-700 pb-2">
          <span className="text-gray-800  dark:text-gray-300">Age:</span> 22 Years
        </div>
        <div className="border-b  border-gray-300 dark:border-gray-700 pb-2">
          <span className="text-gray-800  dark:text-gray-300">Location:</span> Rajshahi,
          Bangladesh
        </div>
      </div>
    </div>

    {/* Right Side - Image Section */}
    <div className="lg:w-5/12 relative">
      <div className="relative group bg-[#011f47] dark:bg-[#04296829] overflow-hidden rounded-lg shadow-lg">
        {/* Image with absolute positioning */}
        <Image
          src={aboutImage}
          alt="Saroar Jahan"
          className="object-cover w-[99%] h-[50%] md:w-full md:max-h-[600px] rounded-lg" // Fix image height and coverage
        />
        {/* Gradient Overlay for Image Effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#042868] via-transparent to-transparent opacity-50"></div>
        
      </div>
    </div>
  </div>
</section>

  );
};

export default About;
