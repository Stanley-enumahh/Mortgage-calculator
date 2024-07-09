import React from "react";

export default function FormInputGroup1({
  text,
  title,
  value,
  onInput,
  onKeyUp,
}) {
  return (
    <div className="">
      <h1 className="text-gray-600 mb-2 md:text-sm text-sm">{title}</h1>
      <div className="border flex flex-row">
        <span className="bg-[#e3f4fc] px-2 flex items-center text-xs">
          {text}
        </span>
        <input
          className="w-full  rounded-sm pl-2 outline-none p-1 font-semibold"
          type="number"
          value={value}
          onInput={onInput}
          onKeyUp={onKeyUp}
        />
      </div>
    </div>
  );
}
