import React from "react";

export default function Results({ value }) {
  return (
    <div className="w-[50%] p-5 bg-blue-800 text-white gap-10 flex flex-col">
      <div className="">
        <h1>Your results</h1>
        <p className="text-xs text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          sed eum provident temporibus laboriosam, cum possimus unde obcaecati
          impedit ratione ea ipsa
        </p>
      </div>
      <div className="flex flex-col gap-5 border-t-8 rounded-lg pt-3 border-t-blue-700 bg-blue-950 p-3">
        <ResultForm
          title="your monthly payment"
          readOnly={true}
          value={value}
        />
        <ResultForm
          title="The total you will repay over the Term"
          readOnly={true}
          value={value}
        />
      </div>
    </div>
  );
}
