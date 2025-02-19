/* eslint-disable padding-line-between-statements */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import BlogCard from "@/components/BlogCard/BlogCard";
import { TBlog } from "@/types";

export default async function BlogPage() {
  const res = await fetch(
    "https://portfolio-server-xi-three.vercel.app/api/blogs"
  );
  const data = await res.json();
  return (
    <div>
      <div className="  my-4">
        <div className=" max-w-[1300px] mx-auto px-3 md:px-5">
          <div className="text-center">
            <h3 className="text-[35px] md:text-4xl font-semibold text-gray-900 dark:text-gray-300">
              Blogs
            </h3>
            <div className="flex mt-2 justify-center">
              <div className="w-10 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-lg:max-w-3xl max-md:max-w-md mx-auto">
            {data?.data?.map((blog: TBlog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
