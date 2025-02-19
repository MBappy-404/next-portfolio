/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */

import { Button } from "@heroui/button";

import Image from "next/image";
type Params = Promise<{ id: string }>;
const page = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://portfolio-server-xi-three.vercel.app/api/projects/${id}`
  );
  const data = await res.json();
  //   console.log(data);
  const project = data?.data;

  return (
    <div className="bg-white dark:bg-gray-950 md:px-5 px-2 pt-5 pb-10 ">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex justify-center flex-col items-start mx-auto max-w-[1100px] p-2 md:p-5">
        <div>
          <Image
            src={project.projectImage}
            alt={project.projectName}
            className="rounded-md"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
        <div className="md:px-2">
          <div>
            <h2 className="text-xl md:text-3xl pt-4 font-bold text-gray-800 dark:text-white mb-2">
              {project.projectName}
            </h2>
            <p className="text-justify text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400">
              {project.projectDescription}
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl pt-2 font-bold text-gray-800 dark:text-white mb-2">
              Technologies
            </h2>
            <div className="flex flex-wrap">
              {project.technologies?.map((tech: string, index: number) => (
                <div
                  key={index}
                  className="  my-[8px] mr-2 flex flex-wrap rounded-full cursor-pointer items-center justify-between   bg-gray-300 text-sm md:text-base xl:text-lg  dark:bg-gray-600 dark:bg-opacity-45 px-4 py-1.5 text-[13px]    text-gray-800 dark:text-white shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl pt-2 font-bold text-gray-800 dark:text-white mb-2">
              Links
            </h2>
            <div className="flex flex-wrap items-center self-center justify-start gap-5 mt-2">
              <div>
                <a target="_blank" href={project?.liveProjectLink}>
                  <Button
                    as={"div"}
                    className="  text-sm md:text-base text-gray-900 dark:text-gray-100 px-4"
                    color="primary"
                    radius="sm"
                    variant="flat"
                  >
                    Live Preview
                  </Button>
                </a>
              </div>
              <div>
                <a target="_blank" href={project?.frontendGitHubLink}>
                  <Button
                    as={"div"}
                    className=" last:text-sm md:text-base text-gray-900 dark:text-gray-100 px-4"
                    color="primary"
                    radius="sm"
                    variant="flat"
                  >
                    Frontend Code
                  </Button>
                </a>
              </div>
              <div>
                <a target="_blank" href={project?.backendGitHubLink}>
                  <Button
                    as={"div"}
                    className=" text-sm md:text-base text-gray-900 dark:text-gray-100 px-4"
                    color="primary"
                    radius="sm"
                    variant="flat"
                  >
                    Frontend Code
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
