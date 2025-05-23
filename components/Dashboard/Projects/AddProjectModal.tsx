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
import { Controller, FieldValues, useForm } from "react-hook-form";
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
  { key: "Prisma", label: "Prisma" },
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

const category = [
  { key: "fullstack", label: "Fullstack" },
  { key: "UX/UI", label: "UX/UI" },
  { key: "Inventory", label: "Inventory" },
  { key: "Uncategorized", label: "Uncategorized" },
   
];

export default function AddProjectModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { handleSubmit, control, register, reset } = useForm();
  const [values, setValues] = useState<string[]>([]);
  const router = useRouter();

  const handleSelectionChange = (keys: SharedSelection) => {
    setValues(Array.from(keys) as string[]); // Convert Set to array
  };

  const createProject = async (data: FieldValues) => {
    const toastId = toast.loading("Adding Project...");
    const formData = new FormData();
  

    const project = {
      projectName: data.projectName,
      frontendGitHubLink: data.frontendGitHubLink,
      backendGitHubLink: data.backendGitHubLink,
      liveProjectLink: data.liveProjectLink,
      technologies: data?.technologies,
      projectDescription: data.projectDescription,
      category: data.category,
      featured: data.featured,
    };

    formData.append("data", JSON.stringify(project));
    formData.append("file", data.projectImage[0]);
    console.log(Object.fromEntries(formData));
    // console.log(data);

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
      toast.error("Failed to add project", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <>
     <Button
        className="mt-2 text-sm md:text-base text-gray-900 dark:text-gray-100 px-4"
        radius="sm"
        onPress={onOpen}
      >
        Add Project
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        backdrop="blur"
      >
        <ModalContent>
          <form onSubmit={handleSubmit(createProject)}>
            <ModalHeader>Add New Project</ModalHeader>
            <ModalBody>
              <div className="space-y-6">
                {/* Name & Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    {...register("projectName", { required: true })}
                    placeholder="Project Name"
                    className="w-full rounded-md py-2 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                  />

                  <input
                    type="file"
                    {...register("projectImage", { required: true })}
                    className="w-full bg-white dark:bg-gray-800 text-sm rounded-md outline-none border border-gray-300 dark:border-gray-800 focus:border-gray-500 dark:focus:border-gray-700 file:cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-200 dark:file:bg-gray-700 file:text-black dark:file:text-gray-300"
                  />
                  
                </div>

                {/* GitHub Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    {...register("frontendGitHubLink", { required: true })}
                    placeholder="Frontend GitHub Link"
                    className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                  />
                  <input
                    {...register("backendGitHubLink")}
                    placeholder="Backend GitHub Link"
                    className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                  />
                     <input
                    {...register("liveProjectLink")}
                    placeholder="Live Project Link"
                    className="w-full max-w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                  />
                </div>

                {/* Live link, Technologies, Category, Featured */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               

                  {/* Technologies multi-select */}
                  <Controller
                    control={control}
                    name="technologies"
                    render={({ field: { value, onChange } }) => (
                      <Select
                        placeholder="Select Technologies"
                        selectionMode="multiple"
                        selectedKeys={new Set(value)}
                        onSelectionChange={(keys: SharedSelection) =>
                          onChange(Array.from(keys))
                        }
                        classNames={{
                          base: "w-full rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-purple-500",
                          selectorIcon: "text-gray-500 dark:text-gray-400",
                        }}
                      >
                        {technologies.map((tech) => (
                          <SelectItem key={tech.key}>{tech.label}</SelectItem>
                        ))}
                      </Select>
                    )}
                  />

                  {/* Category single-select */}
                  <Controller
                    control={control}
                    name="category"
                    render={({ field: { value, onChange } }) => (
                      <Select
                        placeholder="Select Category"
                        selectionMode="single"
                        selectedKeys={new Set([value])}
                        onSelectionChange={(keys: SharedSelection) =>
                          onChange(Array.from(keys)[0] || "")
                        }
                        classNames={{
                          base: "w-full rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-purple-500",
                        }}
                      >
                        {category.map((cat) => (
                          <SelectItem key={cat.key}>{cat.label}</SelectItem>
                        ))}
                      </Select>
                    )}
                  />

                  {/* Featured toggle */}
                  <Controller
                    control={control}
                    name="featured"
                    render={({ field: { value, onChange } }) => (
                      <Select
                        placeholder="Is Featured ?"
                        selectionMode="single"
                        onSelectionChange={(keys: SharedSelection) =>
                          onChange(Array.from(keys)[0] === "yes")
                        }
                        classNames={{
                          base: "w-full rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-purple-500",
                        }}
                      >
                        <SelectItem key="yes">Yes</SelectItem>
                        <SelectItem key="no">No</SelectItem>
                      </Select>
                    )}
                  />
                </div>

                {/* Description */}
                <textarea
                  {...register("projectDescription")}
                  placeholder="Project Description"
                  rows={4}
                  className="w-full rounded-md px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                />
              </div>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" color="primary" radius="sm">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
