/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */

import AddProjectModal from "./AddProjectModal";

import ProjectsCards from "@/components/ProjectCard/ProjectsCards";
import { TProject } from "@/types";

const ManageProject = ({ data }: { data: { data: TProject[] } }) => {
  // console.log(data);

  return (
    <div className="dark:bg-gray-950 p-3 md:p-5 border border-gray-200 dark:border-gray-700 bg-white rounded-md">
      <div className="  flex justify-between items-center">
        {/* Page Title */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Projects  
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Manage your project details below.
          </p>
        </div>

        <AddProjectModal />
      </div>
      <div className="max-w-[1300px] mx-auto">
        <div className="bg-white  dark:bg-gray-950">
          <div className=" flex justify-start ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 mx-auto">
              {data?.data?.map((project: TProject) => (
                <ProjectsCards key={project._id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProject;
