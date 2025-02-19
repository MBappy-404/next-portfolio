/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
"use client";
/* eslint-disable prettier/prettier */
import { Alert } from "@heroui/alert";
import { useEffect } from "react";

/* eslint-disable prettier/prettier */
type AlertsProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "undefined";
};
const Alerts = ({ isVisible, setIsVisible, title, color }: AlertsProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  return (
    <div className="absolute  z-50  right-5 w-full md:w-[30%]  bottom-5  ">
      <Alert
        color={color === "undefined" ? undefined : color}
        isVisible={isVisible}
        title={title}
        variant="faded"
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
};

export default Alerts;
