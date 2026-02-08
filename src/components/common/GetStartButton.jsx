"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";
import { Link } from "react-router-dom";

function GetStartButton({ to }) {
  return (
    <div className="mt-5 flex justify-center text-center">
      <HoverBorderGradient
        as={Link}
        to={to}
        containerClassName="rounded-full"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span className="font-medium tracking-[0.01em]">
          Get Started
        </span>
      </HoverBorderGradient>
    </div>
    
  );
}
export default GetStartButton