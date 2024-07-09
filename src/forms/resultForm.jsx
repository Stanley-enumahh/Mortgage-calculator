import React from "react";

export default function ResultForm({ title, value, readOnly = false }) {
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <p className="text-gray-300 text-sm">{title}</p>
        <p className="w-full text-3xl rounded-sm pl-2 outline-none p-1 bg-transparent ">
          {value}
        </p>
      </div>
    </div>
  );
}
