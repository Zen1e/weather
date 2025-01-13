import { useState } from "react";
// import Content from "./Content";

function App() {

  return(
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-1/2 h-full bg-gray-100 flex justify-center items-center">
        <div className="w-[414px] h-[828px] bg-white/75 rounded-3xl flex justify-center z-30 shadow-lg backdrop-blur-md">
          <div className="w-5/6 h-32 flex">
            <div className="w-4/5 h-full flex flex-col">
              <div className="mt-12 text-gray-400">Date</div>
              <div className="font-bold text-5xl">Location</div>
            </div>
            <img src="./localization_icon.svg" alt="loc" className="w-12 h-12 mt-16"/>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="w-40 h-60 bg-gray-100 absolute flex justify-center">
        <div className="w-20 h-20 absolute left-1/2 bg-slate-900 rounded-bl-full"></div>
        <div className="w-32 h-32 rounded-full absolute bg-gray-100 z-10 flex justify-evenly" style={{top: "56px"}}>
          <img src="./left.svg" className="w-11" />
          <img src="./right.svg" className="w-11" />
        </div>
        <div className="absolute w-20 h-48 bg-slate-900" style={{left: "115px"}}></div>
        <div className="w-20 h-20 absolute left-1/2 bg-slate-900 rounded-tl-full" style={{top: "160px"}}></div>
      </div>
      <div className="absolute size-32 border border-gray-300 rounded-full z-20"></div>
      <div className="absolute border border-gray-300 rounded-full z-20" style={{width: "300px", height: "300px"}}></div>
      <div className="absolute border border-gray-300 rounded-full z-20" style={{width: "550px", height: "550px"}}></div>
      <div className="absolute border border-gray-300 rounded-full z-20" style={{width: "960px", height: "960px"}}></div>
      <div className="w-1/2 h-full bg-slate-900 rounded-bl-3xl flex justify-center items-center">
        <div className="w-[414px] h-[828px] rounded-3xl bg-slate-900/75 z-30 shadow-lg bg-[#111827]/75 backdrop-blur-md"></div>
      </div>
    </div>
  )
  
}

export default App;
