import React from "react";

export default function FormInputGroup2({
  text,
  title,
  value,
  onKeyUp,
  onInput,
}) {
  return (
    <div className="rounded">
      <h1 className="text-gray-600 mb-2 md:text-sm text-xs">{title}</h1>
      <div className="border flex flex-row-reverse w-full">
        <span className="bg-[#e3f4fc] px-3 flex items-center text-xs">
          {text}
        </span>
        <input
          onKeyUp={onKeyUp}
          onInput={onInput}
          value={value}
          className="w-full  rounded-sm pl-2 outline-none p-1 font-semibold"
          type="number"
        />
      </div>
    </div>
  );
}
