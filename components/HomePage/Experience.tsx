/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
const Experience = () => {
  return (
    <section className="relative py-20  bg-white dark:bg-gray-950  text-gray-300 overflow-hidden">
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            My Skills
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 md:w-1/4 text-center mb-8">
              <i className="fab fa-html5 text-4xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold">HTML5</h3>
            </div>
            <div className="w-1/2 md:w-1/4 text-center mb-8">
              <i className="fab fa-css3-alt text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold">CSS3</h3>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Experience;
