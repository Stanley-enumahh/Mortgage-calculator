import React from "react";
import FormInputGroup1 from "./forms/form";
import FormInputGroup2 from "./forms/form2";
import FormInputGroup3 from "./forms/form3";
import Results from "./results";
import { FaPoundSign } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { useState } from "react";
import ResultForm from "./forms/resultForm";

export default function Calc({ value }) {
  const [MortageAmount, setMortgageAmount] = useState("");
  const [MortageTerm, setMortgageTerm] = useState("");
  const [InterestRate, setInterestRate] = useState("");
  const [MonthlyPayment, setMonthlyPayment] = useState(0);
  const [Interest, setInterest] = useState(0);

  function getMonthlyPayment() {
    function percentageTodecimal(percent) {
      return percent / 12 / 100;
    }
    function yearsToMonths(years) {
      return years * 12;
    }

    setMonthlyPayment(
      percentageTodecimal(InterestRate * MortageAmount) /
        (1 -
          Math.pow(
            1 + percentageTodecimal(InterestRate),
            -yearsToMonths(MortageTerm)
          ))
    );

    setInterest([[MonthlyPayment * 360] - MortageAmount]);
    console.log(Interest);
    return MonthlyPayment;
  }

  function clearAll() {
    setMortgageAmount("");
    setInterestRate("");
    setMortgageTerm("");
    setMonthlyPayment(0);
  }

  return (
    <div className="flex md:flex-row flex-col bg-[#fdfefd]">
      <div className="md:w-[50%] w-full p-5 ">
        <div className="flex md:flex-row flex-col md:gap-0 gap-1 justify-between mb-8 w-full">
          <h1>Mortgage calculator</h1>
          <button
            onClick={clearAll}
            className="w-fit underline underline-offset-2 md:text-sm text-xs"
          >
            Clear all
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <FormInputGroup1
            title="Mortgage amount"
            text={<FaPoundSign />}
            value={MortageAmount}
            onInput={(e) => setMortgageAmount(e.target.value)}
          />

          <div className="flex md:flex-row flex-col justify-between gap-4">
            <FormInputGroup2
              title="Mortgage term"
              text="years"
              value={MortageTerm}
              onInput={(e) => setMortgageTerm(e.target.value)}
            />
            <FormInputGroup2
              onInput={(e) => setInterestRate(e.target.value)}
              value={InterestRate}
              title="Interest rate"
              text="%"
            />
          </div>
          <div>
            <FormInputGroup3
              id="Repayment"
              title="Mortgage type"
              label="Repayment"
              text="Repayment"
            />
            <FormInputGroup3
              id="Interest Only"
              checked={false}
              label="Interest-Only"
              text="Interest Only"
            />
          </div>
        </div>
        <button
          onClick={getMonthlyPayment}
          className="font-semibold flex flex-row gap-2 items-center mt-4 px-3 py-2 md:w-[70%] w-full justify-center bg-[#cbd241] duration-150 transition-all rounded-2xl"
          type="submit"
        >
          <FaCalculator /> calculate Repayments
        </button>
      </div>

      <div className="result md:w-[50%] w-full p-5 md:gap-10 gap-4 flex flex-col bg-[#38484b]">
        <div className="">
          <h1 className="text-white">Your results</h1>
          <p className="text-xs text-slate-300 mt-3">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
        </div>
        <div className="flex flex-col gap-10 md:border-t-8  border-t-2 md:rounded-lg pt-3 border-t-[#cbd241] bg-[#122c39] p-3">
          <span className="flex flex-col gap-2">
            <p className="text-sm md:text-xs text-gray-400">
              your monthly payment
            </p>
            <h1 className="flex items-center flex-row text-3xl text-[#cbd241]">
              <FaPoundSign />
              {MonthlyPayment.toFixed(2)}
            </h1>
          </span>

          <span className="flex flex-col gap-2">
            <p className="text-sm md:text-xs text-gray-400">
              The total you will repay over the Term
            </p>
            <h1 className="text-xl flex items-center flex-row text-white">
              <FaPoundSign />
              {(MonthlyPayment * 360).toFixed(2)}
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
}
