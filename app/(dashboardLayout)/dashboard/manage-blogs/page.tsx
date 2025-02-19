/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */

import ManageBlogs from "@/components/Dashboard/Blogs/ManageBlogs";

const page = async () => {
  const res = await fetch("https://portfolio-server-xi-three.vercel.app/api/blogs");
  const data = await res.json();
  return (
    <div>
      <ManageBlogs data={data} />
    </div>
  );
};

export default page;
