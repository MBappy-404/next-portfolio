/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-no-undef */
 
 
import { Chip } from "@heroui/chip";
import Image from "next/image";

type Params = Promise<{ id: string }>

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;  

  const res = await fetch(
    `https://portfolio-server-xi-three.vercel.app/api/blogs/${id}`,
    {
      cache: "no-store", // Prevent caching for fresh data on every request
    }
  );

  if (!res.ok) {
    return <div className="text-center text-red-500">Failed to load blog</div>;
  }

  const data = await res.json();
  const blog = data?.data;

  return (
    <div className="dark:bg-gray-950 md:px-5 px-2 py-5">
      <div className="flex justify-center flex-col items-start mx-auto max-w-[1100px]">
        <div className="bg-gray-100 w-full dark:bg-gray-800 cursor-pointer rounded overflow-hidden p-2 md:p-5">
          <div className=" rounded-md">
          <h3 className="text-xl md:text-3xl pb-4 font-bold text-gray-800 dark:text-gray-200">
              {blog?.title ?? "No Title Available"}
            </h3>
            <Image
              src={blog?.blogImage}
              alt={blog?.title ?? "Blog image"}
              className="rounded-md  "
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <div className="p-1 md:p-5">
            <Chip className="uppercase mb-2" radius="sm">
              {blog?.category ?? "Uncategorized"}
            </Chip>
            <span className="text-sm block text-gray-400 dark:text-gray-500 mb-2">
              {blog?.createdAt?.slice(0, 10) ?? "Unknown date"} | BY{" "}
              <span className="uppercase">{blog?.author ?? "Unknown"}</span>
            </span>
           
            <hr className="my-3 border-t border-gray-300 dark:border-gray-600" />
            <p className="text-gray-600 dark:text-gray-400 text-justify text-sm md:text-base xl:text-lg">
              {blog?.description ?? "No description available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
