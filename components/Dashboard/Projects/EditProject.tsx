/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
/* eslint-disable react/jsx-sort-props */
"use client";

import { updateProject } from "@/lib/query/project";
import { TProject } from "@/types";
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
import { useEffect, useState } from "react";
import {
  Controller,
  useForm,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
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

const categories = [
  { key: "fullstack", label: "Fullstack" },
  { key: "UX/UI", label: "UX/UI" },
  { key: "Inventory", label: "Inventory" },
  { key: "Uncategorized", label: "Uncategorized" },
   
];
interface EditProjectModalProps {
  project: TProject;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
   
}

export default function EditProjectModal({
  project,
  isOpen,
  onOpenChange,
  onClose,
}: EditProjectModalProps) {
  const router = useRouter();
  const { control, register, reset, handleSubmit, watch } = useForm<FieldValues>({
    defaultValues: {
      projectName: "",
      frontendGitHubLink: "",
      backendGitHubLink: "",
      liveProjectLink: "",
      technologies: [],
      category: "uncategorized",
      featured: false,
      projectDescription: "",
      projectImage: null,
    },
  });

  useEffect(() => {
    if (project) {
      reset({
        projectName: project.projectName,
        frontendGitHubLink: project.frontendGitHubLink,
        backendGitHubLink: project.backendGitHubLink,
        liveProjectLink: project.liveProjectLink,
        technologies: project.technologies,
        category: project.category || "uncategorized",
        featured: project.featured || false,
        projectDescription: project.projectDescription,
        projectImage: project.projectImage || null,
      });
    }
  }, [project, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating project...");
    try {
      const formData = new FormData();
      const payload = {
        ...data,
        technologies: data.technologies,
      };
      
      formData.append("data", JSON.stringify(payload));
      if (data.projectImage?.[0]) {
        formData.append("file", data.projectImage[0]);
      }

      console.log(data.projectImage);
      

      const res = await updateProject(formData, project._id);
      if (res?.success) {
        toast.success("Project updated!", { id: toastId });
        router.refresh();
        onClose();
      } else {
        toast.error(res?.error?.message || "Update failed", { id: toastId });
      }
    } catch (err) {
      toast.error("Unexpected error", { id: toastId });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="4xl"
      backdrop="blur"
    >
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Update Project</ModalHeader>
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
                  {...register("projectImage")}
                  className="w-full bg-white dark:bg-gray-800 text-sm rounded-md outline-none border border-gray-300 dark:border-gray-800 focus:border-gray-500 dark:focus:border-gray-700 file:cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-200 dark:file:bg-gray-700 file:text-black dark:file:text-gray-300"
                />
              </div>

              {/* GitHub + Live Links */}
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
                  className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                />
              </div>

              {/* Tech / Category / Featured */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Technologies */}
                <Controller
                  control={control}
                  name="technologies"
                  render={({ field: { value, onChange } }) => (
                    <Select
                      placeholder="Select Technologies"
                      selectionMode="multiple"
                      selectedKeys={new Set(value)}
                      onSelectionChange={(keys) => onChange(Array.from(keys))}
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

                {/* Category */}
                <Controller
                  control={control}
                  name="category"
                  render={({ field: { value, onChange } }) => (
                    <Select
                      placeholder="Select Category"
                      selectionMode="single"
                      selectedKeys={new Set([value])}
                      onSelectionChange={(keys) => 
                        onChange(keys instanceof Set ? Array.from(keys)[0] : "")
                      }
                    >
                      {categories.map((cat:any) => (
                        <SelectItem key={cat.key}>{cat.label}</SelectItem>
                      ))}
                    </Select>
                  )}
                />

                {/* Featured */}
                <Controller
                  control={control}
                  name="featured"
                  render={({ field: { value, onChange } }) => (
                    <Select
                      placeholder="Is Featured?"
                      selectionMode="single"
                      selectedKeys={new Set([value ? "yes" : "no"])}
                      onSelectionChange={(keys) =>
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
              Update
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}