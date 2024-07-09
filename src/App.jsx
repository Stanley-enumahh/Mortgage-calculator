import "./App.css";
import Calc from "./calc";
import Results from "./results";

function App() {
  return (
    <div className="md:bg-[#e3f4fc] bg-[#ebebeb]  md:h-screen h-fit flex overflow-hidden justify-center items-center w-full">
      <div className="flex flex-row md:w-[60%] w-[100%] md:h-[70%] h-fit shadow-lg md:rounded-2xl overflow-hidden">
        <Calc />
      </div>
    </div>
  );
}

export default App;
