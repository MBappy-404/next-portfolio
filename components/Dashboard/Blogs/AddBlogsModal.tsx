/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client"
import { addBlog } from "@/lib/query/project";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function AddBlogsModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { handleSubmit, register, reset } = useForm();
  const router = useRouter();
  const createBlog = async (data: FieldValues) => {
    const toastId = toast.loading("Adding Blog...");
    const formData = new FormData();
    const blogData = {
      author: "Saroar Jahan",
      title: data.title,
      category: data.category,
      description: data.description,
    };

    formData.append("data", JSON.stringify(blogData));
    formData.append("file", data.blogImage[0]);
    // console.log(Object.fromEntries(formData));

    const res = await addBlog(formData);
    // console.log(res);

    if (res?.success) {
      toast.success("Blog added successfully", {
        id: toastId,
        duration: 2000,
      });
      onClose();
      router.refresh();
      reset();
    } else {
      toast.success("Failed to add blog", { id: toastId, duration: 2000 });
    }
  };

  return (
    <>
      <Button
        className="mt-2 text-sm md:text-base text-gray-900 dark:text-gray-100 px-4"
        radius="sm"
        onPress={onOpen}
      >
        Add  Blog
      </Button>
      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <form onSubmit={handleSubmit(createBlog)}>
            <ModalHeader className="flex flex-col gap-1">
              Add New Blog
            </ModalHeader>
            <ModalBody>
              <div className="flex justify-center mt-0">
                <div className="w-full max-w-3xl space-y-4">
                  {/* Blog Title & Upload Image (Same Row) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      {...register("title")}
                      placeholder="Blog Title"
                      className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                    />
                    <input
                      type="file"
                      {...register("blogImage")}
                      className="w-full bg-white dark:bg-gray-800 text-sm py-0 rounded-md outline-none border-[#dddddd] dark:border-gray-800 border focus:border-[#c5c4c4] transition-all file:cursor-pointer cursor-pointer file:border-0 file:py-[12px] file:px-4 file:mr-4 file:bg-[#DDDDDD] dark:focus:border-gray-700 dark:file:bg-gray-700 dark:file:text-gray-300 file:text-black dark:text-gray-300"
                      placeholder="Upload Image"
                    />
                  </div>

                  {/* Blog Category */}
                  <select
                    {...register("category")}
                    className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                  >
                    <option disabled>Select Category</option>
                    <option value="tech">Technology</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                  </select>

                  {/* Blog Description */}
                  <textarea
                    placeholder="Blog Description"
                    {...register("description")}
                    rows={4}
                    className="w-full rounded-md px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm pt-3 outline-none border border-gray-300 dark:border-gray-800 focus:bg-gray-50 dark:focus:border-gray-700"
                  ></textarea>
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
