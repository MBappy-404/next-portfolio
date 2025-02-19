/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
"use client";
import { deleteBlog } from "@/lib/query/project";
import EditBlogsModal from "../Dashboard/Blogs/EditBlog";
import { useDisclosure } from "@heroui/modal";
import { usePathname, useRouter } from "next/navigation";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { TBlog } from "@/types";
import { toast } from "sonner";

/* eslint-disable react/jsx-sort-props */
const BlogCard = ({ blog }: { blog: TBlog }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();
  // console.log(pathname);

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting Blog...");
    const res = await deleteBlog(id);
    if (res.success) {
      toast.success("Blog deleted successfully", {
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
            src={blog.blogImage}
            alt="Blog Post 1"
            className="w-full h-60 border border-gray-200 dark:border-gray-700 rounded-md object-cover"
          />
        </div>
        <div className="px-5 py-4">
          <Chip radius="sm" className="text-xs uppercase mb-2">
            {blog?.category}
          </Chip>
          <span className="text-sm block text-gray-400 dark:text-gray-500 mb-2">
            {blog.createdAt.slice(0, 10)} | BY{" "}
            <span className="uppercase">{blog.author}</span>
          </span>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            {blog.title}
          </h3>
          <hr className="my-3  border-t border-gray-300 dark:border-gray-600 " />
          <p className="text-gray-400 dark:text-gray-400 text-sm">
            {blog.description.slice(0, 120)}....
          </p>
          {pathname === "/dashboard/manage-blogs" ? (
            <div className="flex justify-between mt-4">
              <Button
                onPress={onOpen}
                color="primary"
                className="text-base text-gray-900 dark:text-gray-100 px-10"
                variant="flat"
                radius="sm"
              >
                {" "}
                Edit
              </Button>

              <Button
                // endContent={}
                onPress={() => handleDelete(blog._id)}
                className="text-base text-gray-900 dark:text-gray-100 px-8"
                color="primary"
                radius="sm"
                variant="flat"
              >
                Delete
              </Button>
            </div>
          ) : (
            <div>
              <Button
                onPress={() => router.push(`/blogs/${blog._id}`)}
                as={"div"}
                className="mt-2 text-base text-gray-900 dark:text-gray-100 px-4"
                color="primary"
                radius="sm"
                variant="flat"
              >
                Read More
              </Button>
            </div>
          )}
        </div>
        <EditBlogsModal
          blog={blog}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default BlogCard;
