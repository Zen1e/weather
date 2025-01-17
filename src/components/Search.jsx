import {useEffect, useState } from "react";

const Search = (props) => {
    const {updatedData, loc, setLoc, getWeather} = props;
    const [filtered, setFiltered] = useState([]);
    const [inputValue, setInputValue] = useState("");
    useEffect(()=>{
        if(inputValue===""){
            setFiltered([]);
        }
        else{
        const filtered = updatedData.filter((elem)=> elem.toLowerCase().includes(inputValue.toLowerCase()));
        if(filtered.length>10){
            filtered.length = 10;
        }
        setFiltered(filtered);
        }
    },[inputValue])
    const onclick = (elem) => {
        const match=elem.match(/[-./a-zA-Z0-9\s]*(?=,)/)
        const loc = match[0];
        setLoc(loc);
        getWeather(loc);
        setInputValue("");
    }
    const onChange = () => {
        setInputValue(event.target.value);
    }
    

    return(
        <>
        <div className="absolute top-[100px] z-40">
            <input type="text" className="w-[500px] h-[70px] border text-black z-50 outline-none text-[35px] pl-[70px] pb-[2px] rounded-full" value={inputValue} onChange={onChange}/>
            <img src="./search.svg" className="relative -top-[58px] left-[15px]"/>
        {filtered.length !== 0 ? (<div className="w-[500px] border absolute z-50 top-[90px] rounded-3xl bg-white/80 shadow-lg bacakdrop-blur-md overflow-hidden cursor-pointer">
            {filtered.map((elem, index) => (
                <div className="h-[60px] backdrop-blur-md flex hover:bg-gray-100 transition duration-500" key={index} onClick={() => onclick(elem)}>
                    <img src="./localization_icon.svg" className="w-[40px] opacity-80"/>
                    <div className="h-fit text-[20px] font-bold pt-[15px]">{elem}</div>
                </div>
            ))
            }
        </div>) : ("")
        }
        </div>
        </>
    )
}

export default Search;