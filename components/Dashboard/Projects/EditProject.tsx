/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";
import {  updateProject } from "@/lib/query/project";
import { TProject } from "@/types";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Select, SelectItem } from "@heroui/select";
import { SharedSelection } from "@heroui/system";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export const technologies = [
  { key: "HTML", label: "HTML" },
  { key: "CSS", label: "CSS" },
  { key: "JavaScript", label: "JavaScript" },
  { key: "JQuery", label: "JQuery" },
  { key: "Swiper", label: "Swiper" },
  { key: "TypeScript", label: "TypeScript" },
  { key: "Bootstrap", label: "Bootstrap" },
  { key: "Tailwind CSS", label: "Tailwind CSS" },
  { key: "React JS", label: "React JS" },
  { key: "Next JS", label: "Next JS" },
  { key: "Ant Design", label: "Ant Design" },
  { key: "Node.js", label: "Node.js" },
  { key: "Express.js", label: "Express.js" },
  { key: "MongoDB", label: "MongoDB" },
  { key: "Firebase", label: "Firebase" },
  { key: "Next Auth", label: "Next Auth" },
  { key: "Vercel", label: "Vercel" },
  { key: "SweetAlert", label: "SweetAlert" },
  { key: "Sooner", label: "Sooner" },
  { key: "Moment Js", label: "Moment.js" },
  { key: "Soket.io", label: "Soket.io" },
  { key: "Hot Toast", label: "Hot Toast" },
  { key: "Toastify", label: "Toastify" },
  { key: "Stripe", label: "Stripe" },
  { key: "Shurjo Pay", label: "Shurjo Pay" },
];
interface EditProjectModalProps {
  project: TProject;
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: (isOpen: boolean) => void;
  onClose: () => void;
}

export default function EditProjectModal({
  project,
  isOpen,
  onOpenChange,
  onClose,
}: EditProjectModalProps) {
  const { handleSubmit, register, reset } = useForm();
  const [values, setValues] = useState<string[]>(project?.technologies || []);
  const router = useRouter();
  useEffect(() => {
    if (project) {
      reset({
        projectName: project.projectName || "",
        projectImage: project.projectImage || "",
        frontendGitHubLink: project.frontendGitHubLink || "",
        backendGitHubLink: project.backendGitHubLink || "",
        liveProjectLink: project.liveProjectLink || "",
        technologies: project.technologies || [],
        projectDescription: project.projectDescription || "",
      });
    }
  }, [project, reset]);
  const handleSelectionChange = (keys: SharedSelection) => {
    setValues(Array.from(keys) as string[]); // Convert Set to array
  };
  const handleUpdateProject: SubmitErrorHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating Project...");
    const formData = new FormData();
    const technologiesArray = values;
    const projectData = {
      ...data,
      technologies: technologiesArray,
    };

    console.log(projectData);

    formData.append("data", JSON.stringify(projectData));
    if (
      data.projectImage &&
      Array.isArray(data.projectImage) &&
      data.projectImage[0]
    ) {
      formData.append("file", data.projectImage[0]);
    }

    // console.log(Object.fromEntries(formData));

    const res = await updateProject(formData, project._id);
    console.log(res);

    if (res?.success) {
      toast.success("Project updated successfully", {
        id: toastId,
        duration: 2000,
      });
      router.refresh();
      onClose();
    } else {
      toast.success("Failed to update project", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <>
      {/* <Button onPress={onOpen}>Add New Blog</Button> */}
      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <form onSubmit={handleSubmit(handleUpdateProject)}>
            <ModalHeader className="flex flex-col gap-1">
              Add New Blog
            </ModalHeader>
            <ModalBody>
              <div className="flex justify-center mt-0">
                <div className="w-full max-w-3xl space-y-4">
                  {/* Project Name & Upload Project Image (Same Row) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Project Name"
                      {...register("projectName")}
                      className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                    />
                    <input
                      type="file"
                      {...register("projectImage")}
                      className="  w-full bg-white dark:bg-gray-800 text-sm py-0 rounded-md outline-none border-[#dddddd] dark:border-gray-800 border focus:border-[#c5c4c4] transition-all file:cursor-pointer cursor-pointer file:border-0 file:py-[12px] file:px-4 file:mr-4 file:bg-[#DDDDDD]  dark:file:bg-gray-700 dark:focus:border-gray-700 dark:file:text-gray-300 file:text-black dark:text-gray-300"
                      placeholder="Upload Photo"
                    />
                  </div>

                  {/* GitHub Links (2 columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      {...register("frontendGitHubLink")}
                      placeholder="Frontend GitHub Link"
                      className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                    />
                    <input
                      type="text"
                      {...register("backendGitHubLink")}
                      placeholder="Backend GitHub Link"
                      className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                    />
                  </div>

                  {/* Live Project Link */}
                  <div className="md:flex w-full   gap-4  ">
                    <input
                      type="text"
                      placeholder="Live Project Link"
                      {...register("liveProjectLink")}
                      className="w-full  max-w-[355px]  rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                    />
                    <Select
                      className="bg-gray-100 hover:bg-gray-100  mt-4 md:mt-0 max-w-[351px]  dark:bg-gray-800"
                      // label="Select Technologies"
                      classNames={{
                        base: "w-full border-gray-300 dark:border-gray-800  rounded-md max-w-[365px] bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700",
                        innerWrapper: "bg-gray-100   dark:bg-gray-800 ",
                        trigger:
                          "bg-gray-100 focus:bg-gray-100 dark:bg-gray-800",
                        selectorIcon: "bg-gray-100 dark:bg-gray-800",
                      }}
                      placeholder="Update Technologies"
                      selectedKeys={values}
                      selectionMode="multiple"
                      onSelectionChange={handleSelectionChange}
                    >
                      {technologies.map((technology) => (
                        <SelectItem key={technology.key}>
                          {technology.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  {/* Project Description */}
                  <textarea
                    placeholder="Project Description"
                    rows={4}
                    {...register("projectDescription")}
                    className="w-full rounded-md px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm pt-3 outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                  ></textarea>
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" color="primary">
                Update
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
