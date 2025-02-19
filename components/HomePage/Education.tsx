/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

const Education = () => {
  return (
    <section className="bg-white relative dark:bg-gray-950 transition-colors duration-300">
         {/* <div className="absolute  top-[15%] dark:block hidden left-0 w-full md:w-[60%] h-[80%] md:h-[500px] bg-gradient-to-br from-[#011f47] via-[#042968] to-transparent opacity-70 blur-3xl rounded-full"></div> */}
      <div className= "   max-w-[1300px] mx-auto px-3 md:px-5 py-10">
     
        <div className="text-center">
          <h3 className="text-[35px] md:text-4xl font-semibold text-gray-900 dark:text-gray-300">
            EDUCATION
          </h3>
          <div className="flex mt-2 justify-center">
            <div className="w-20 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
       
        <div className="mt-10 md:mt-20">
          {/* Diploma in CSE */}
          <div className="flex flex-row">
            <div className="hidden md:flex flex-col rounded-md items-center">
              <div className="w-32 py-5 bg-gray-200 dark:bg-gray-800 rounded-md mr-4 uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-900 dark:text-gray-300">
                  CSE
                </div>
                <div className="text-gray-700 dark:text-gray-400 text-sm">
                  2019-2024
                </div>
              </div>
              <div className="h-full border-l-2 border-transparent">
                <div className="border-l-2 mr-4 h-full border-gray-400 dark:border-gray-700 border-dashed"></div>
              </div>
            </div>

            <div className="flex w-full md:w-[75%] bg-gray-200 dark:bg-gray-800 hover:bg-opacity-50 transition-colors duration-700 rounded-md">
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-900 dark:text-gray-300">
                    <span className="font-black">CSE</span> - 2019-2024
                  </div>
                  <div className="p-3 text-3xl font-semibold text-gray-900 dark:text-gray-200">
                    Diploma In CSE.
                  </div>
                  <div className="px-3 md:px-5 text-sm md:text-base leading-7 md:leading-[28px] font-sans pb-6 text-gray-700 dark:text-gray-400">
                    "I have successfully completed a diploma in Computer Science
                    and Engineering (CSE) from Rajshahi Polytechnic Institute,
                    acquiring comprehensive knowledge and practical skills in
                    the field. The program at Rajshahi Polytechnic Institute
                    covered a diverse range of subjects, including programming
                    languages, algorithms, software development, computer
                    architecture, and more. I am well-equipped to apply my
                    expertise to various aspects of computer science,
                    demonstrating proficiency in both theoretical understanding
                    and hands-on implementation."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Connection */}
          <div className="flex items-start flex-row">
            <div className="border-t-2 border-r-2 border-transparent">
              <div className="w-16 ml-16 h-16 border-l-2 border-gray-400 dark:border-gray-700 border-dashed border-b-2 rounded-bl-full"></div>
            </div>
            <div className="border-t-2 border-transparent flex-auto">
              <div className="h-16 border-b-2 border-gray-400 dark:border-gray-700 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 mr-16 h-16 border-r-2 border-gray-400 dark:border-gray-700 border-dashed border-t-2 rounded-tr-full"></div>
          </div>

          {/* SSC Section */}
          <div className="flex flex-row-reverse">
            <div className="hidden md:flex flex-col rounded-md items-center">
              <div className="w-32 py-5 bg-gray-200 dark:bg-gray-800 rounded-md ml-4 uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-900 dark:text-gray-300">
                  SSC
                </div>
                <div className="text-gray-700 dark:text-gray-400 text-sm">
                  2019
                </div>
              </div>
            </div>

            <div className="flex w-full md:w-[75%] bg-gray-200 dark:bg-gray-800 hover:bg-opacity-50 transition-colors duration-700 rounded-md">
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-900 dark:text-gray-300">
                    <span className="font-black">SSC</span> - 2019
                  </div>
                  <div className="p-3 text-3xl font-semibold text-gray-900 dark:text-gray-200">
                    Secondary School Certificate.
                  </div>
                  <div className="px-3 md:px-5 pb-6 text-sm md:text-base leading-7 md:leading-[28px] font-sans text-gray-700 dark:text-gray-400">
                    "I have successfully completed my Secondary School
                    Certificate (SSC) from Pirijpur High School , marking a
                    significant chapter in my academic journey. The curriculum
                    at Pirijpur High School covered a diverse range of subjects,
                    including mathematics, science, languages, and social
                    studies. This experience not only provided me with a solid
                    foundation of knowledge but also cultivated essential skills
                    in critical thinking and effective communication. The
                    education received at Pirijpur High School has been
                    instrumental in shaping my academic path and lays the
                    groundwork for future achievements in my academic and
                    professional endeavors."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
