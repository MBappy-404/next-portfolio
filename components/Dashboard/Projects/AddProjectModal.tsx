/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";
import { addProject } from "@/lib/query/project";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Select, SelectItem } from "@heroui/select";
import { SharedSelection } from "@heroui/system";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

export const technologies = [
  { key: "html", label: "HTML" },
  { key: "css", label: "CSS" },
  { key: "javascript", label: "JavaScript" },
  { key: "typescript", label: "TypeScript" },
  { key: "bootstrap", label: "Bootstrap" },
  { key: "tailwind", label: "Tailwind CSS" },
  { key: "react", label: "React JS" },
  { key: "next", label: "Next JS" },
  { key: "ant", label: "Ant Design" },
  { key: "node", label: "Node.js" },
  { key: "express", label: "Express.js" },
  { key: "mongodb", label: "MongoDB" },
  { key: "firebase", label: "Firebase" },
  { key: "vercel", label: "Vercel" },
  { key: "sweetalert", label: "SweetAlert" },
  { key: "sooner", label: "sooner" },
  { key: "stripe", label: "Stripe" },
];

export default function AddProjectModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { handleSubmit, register, reset } = useForm();
  const [values, setValues] = useState<string[]>([]);
  const router = useRouter();

  const handleSelectionChange = (keys: SharedSelection) => {
    setValues(Array.from(keys) as string[]); // Convert Set to array
  };

  const createProject = async (data: FieldValues) => {
    const toastId = toast.loading("Adding Project...");
    const formData = new FormData();
    const technologiesArray = values; // Use the selected values from the state

    const project = {
      projectName: data.projectName,
      frontendGitHubLink: data.frontendGitHubLink,
      backendGitHubLink: data.backendGitHubLink,
      liveProjectLink: data.liveProjectLink,
      technologies: technologiesArray,
      projectDescription: data.projectDescription,
    };

    formData.append("data", JSON.stringify(project));
    formData.append("file", data.projectImage[0]);
    console.log(Object.fromEntries(formData));

    const res = await addProject(formData);
    console.log(res);

    if (res?.success) {
      toast.success("Project added successfully", {
        id: toastId,
        duration: 2000,
      });
      router.refresh();
      onClose();
      reset();
    } else {
      toast.success("Failed to add project", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <>
      <Button
        className="mt-2 text-sm md:text-base text-gray-900 dark:text-gray-100 px-4"
        color="primary"
        variant="flat"
        radius="sm"
        onPress={onOpen}
      >
        Add  Project
      </Button>
      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <form onSubmit={handleSubmit(createProject)}>
            <ModalHeader className="flex flex-col gap-1">
              Add New Project
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

                  <div className="md:flex w-full gap-4  ">
                    <input
                      type="text"
                      placeholder="Live Project Link"
                      {...register("liveProjectLink")}
                      className="w-full  max-w-[355px]  rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                    />
                    <Select
                      className="bg-gray-100 hover:bg-gray-100 mt-4 md:mt-0  max-w-[351px]  dark:bg-gray-800"
                      // label="Select Technologies"
                      classNames={{
                        base: "w-full border-gray-300 dark:border-gray-800  rounded-md max-w-[365px] bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700",
                        innerWrapper: "bg-gray-100   dark:bg-gray-800 ",

                        trigger:
                          "bg-gray-100 focus:bg-gray-100 dark:bg-gray-800",
                        selectorIcon: "bg-gray-100 dark:bg-gray-800",
                      }}
                      placeholder="Select Technologies"
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
              <Button radius="sm" type="submit" color="primary">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
