/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
"use client";
import { addMessage } from "@/lib/query/project";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

/* eslint-disable react/jsx-sort-props */
const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const sendMessage = async (data: FieldValues) => {
    const toastId = toast.loading("Sending message...");
    const res = await addMessage(data);
    console.log(res);

    if (res.success) {
      toast.success("Your message has been recorded", {
        id: toastId,
        duration: 3000,
      });
      reset();
    } else {
      toast.error("Failed to send message", {
        id: toastId,
        duration: 3000,
      });
    }
  };
  return (
    <form className="ml-auto space-y-4" onSubmit={handleSubmit(sendMessage)}>
      <input
        type="text"
        {...register("name")}
        placeholder="Name"
        className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800  focus:bg-gray-200 dark:focus:bg-gray-800"
      />
      <input
        type="email"
        {...register("email")}
        placeholder="Email"
        className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800  focus:bg-gray-200 dark:focus:bg-gray-800"
      />
      <input
        type="text"
        {...register("subject")}
        placeholder="Subject"
        className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm outline-none border border-gray-300 dark:border-gray-800  focus:bg-gray-200 dark:focus:bg-gray-800 "
      />
      <textarea
        placeholder="Message"
        {...register("message")}
        rows={6}
        className="w-full rounded-md px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm pt-3 outline-none border border-gray-300 dark:border-gray-800  focus:bg-gray-200 dark:focus:bg-gray-800"
      ></textarea>
      <button
        type="submit"
        className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
      >
        Send
      </button>
      
    </form>
  );
};

export default ContactForm;
