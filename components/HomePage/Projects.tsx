/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import { TProject } from "@/types";
import ProjectsCards from "../ProjectCard/ProjectsCards";

/* eslint-disable react/jsx-sort-props */
const Projects = async () => {
  const res = await fetch("https://portfolio-server-xi-three.vercel.app/api/projects");
  const data = await res.json();
  return (
    <div className="  dark:bg-gray-950 md:px-5 px-3 py-12 ">
      <div className=" mx-auto max-w-[1300px] md:px-5">
      <div className="text-center">
          <h3 className="text-[35px] md:text-4xl font-semibold text-gray-900 dark:text-gray-300">
            PROJECTS
          </h3>
          <div className="flex mt-2 justify-center">
            <div className="w-20 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {data?.data
            ?.slice(0, 3)
            .map((project : TProject, index : number) => (
              <ProjectsCards project={project} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
