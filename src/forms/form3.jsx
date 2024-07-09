import React from "react";

export default function FormInputGroup3({
  title,
  text,
  value,
  onKeyUp,
  onInput,
  checked,
  onChange,
  id,
  onClick,
  label,
}) {
  return (
    <div className="">
      <h1 className="text-gray-600 mb-2 md:text-sm text-xs">{title}</h1>
      <div className="border flex flex-row gap-4 px-2 py-2 hover:bg-[#cbd241] transition-all duration-150">
        <input
          onKeyUp={onKeyUp}
          onInput={onInput}
          value={value}
          id={id}
          onClick={onClick}
          name="gender"
          className=" rounded-sm outline-none text-xs font-semibold"
          type="radio"
          label={label}
        />
        <label
          className="md:font-semibold font-bold md:text-sm text-xs"
          htmlFor={id}
        >
          {text}
        </label>
      </div>
    </div>
  );
}
