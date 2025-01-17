 const Logo = () => {
    return(
        <>
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
        </>
    )
 }

 export default Logo;