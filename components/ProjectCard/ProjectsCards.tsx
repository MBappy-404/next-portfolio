/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-sort-props */
"use client";
import { deleteProject } from "@/lib/query/project";
import { useDisclosure } from "@heroui/modal";
import { usePathname, useRouter } from "next/navigation";
import EditProjectModal from "../Dashboard/Projects/EditProject";
import { toast } from "sonner";
import { Button } from "@heroui/button";
import { TProject } from "@/types";

/* eslint-disable prettier/prettier */
const ProjectsCards = ({ project }: { project: TProject }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();

  const handleDelete = async (projectId: string) => {
    const toastId = toast.loading("Deleting Project...");
    const res = await deleteProject(projectId);
    if (res.success) {
      toast.success("Project deleted successfully", {
        id: toastId,
        duration: 2000,
      });
      router.refresh();
    }
  };
  return (
    <div>
      <div className="bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative  ">
        <div className="p-2 rounded-md ">
          <img
            src={project.projectImage}
            alt="Blog Post 1"
            className="w-full h-60 border border-gray-200 dark:border-gray-700 rounded-md object-cover"
          />
        </div>
        <div className="px-5 py-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            {project.projectName}
          </h3>
          <hr className="my-3  border-t border-gray-300 dark:border-gray-600 " />
          <p className="text-gray-400 dark:text-gray-400  md:text-base text-sm">
            {project.projectDescription.slice(0, 120)}
          </p>
          {pathname === "/dashboard/manage-projects" ? (
            <div className="flex justify-between mt-4">
              <Button
                onPress={onOpen}
                color="primary"
                className="text-base text-gray-900 dark:text-gray-100 px-10"
                variant="flat"
              >
                {" "}
                Edit
              </Button>

              <Button
                // endContent={}
                onPress={() => handleDelete(project._id)}
                className="text-base text-gray-900 dark:text-gray-100 px-8"
                color="primary"
                variant="flat"
              >
                Delete
              </Button>
            </div>
          ) : (
            <div>
              <div>
                <Button
                  onPress={() => router.push(`/projects/${project._id}`)}
                  as={"div"}
                  className="mt-2 text-base text-gray-900 dark:text-gray-100 px-4"
                  color="primary"
                  radius="sm"
                  variant="flat"
                >
                  View Details
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <EditProjectModal
        project={project}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </div>
  );
};

export default ProjectsCards;
