/* eslint-disable prettier/prettier */
// /* eslint-disable padding-line-between-statements */
// /* eslint-disable jsx-a11y/img-redundant-alt */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable react/self-closing-comp */
// /* eslint-disable prettier/prettier */
// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable prettier/prettier */

// import { deleteProject } from "@/lib/query/project";
// import EditProjectModal from "../Dashboard/Projects/EditProject";
// import { useDisclosure } from "@heroui/modal";

// /* eslint-disable react/jsx-sort-props */
// export default function ProjectCard({ project }) {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const handleDelete = async (projectId: string) => {
//     const res = await deleteProject(projectId);
//     console.log(res);
//   };
//   return (
//     <div className="max-w-lg flex flex-col    justify-between w-full mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
//       {/* Image Section */}
//       <div className="relative group cursor-pointer">
//         <img
//           src={project.projectImage}
//           alt={project.projectName}
//           className="w-full h-[300px] object-cover group-hover:brightness-75 transition duration-300"
//         />
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//           <p className="bg-black/60 text-white text-lg px-5 py-2 rounded-lg">
//             Preview
//           </p>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-6 space-y-4">
//         <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
//           {project.projectName}
//         </h2>
//         <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed line-clamp-3">
//           {project.projectDescription}
//         </p>

//         {/* Buttons Section */}
//         <div className="flex justify-between mt-4">
//           <button onClick={onOpen} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]">
//             Edit
//           </button>

//           <button
//             onClick={() => handleDelete(project._id)}
//             className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
//           >
//             Delete
//           </button>
//         </div>
//         <EditProjectModal
//           project={project}
//           isOpen={isOpen}
//           onOpen={onOpen}
//           onOpenChange={onOpenChange}
//         />
//       </div>
//     </div>
//   );
// }
