import React, { useEffect, useState } from 'react'
import DarkButton from "../../assets/Tema/dark-mode.png"
import LightButton from "../../assets/Tema/light-mode.png"
const Darkmode = () => {
    const [tema, setTema] = useState(
        localStorage.getItem('tema') ? localStorage.getItem('tema') : 'light'
    ); 
    const element= document.documentElement; //Elemento html
    useEffect(()=>{
        if (tema==="dark"){
            element.classList.add("dark");
            localStorage.setItem("tema", "dark");
        }else{
            element.classList.remove("dark");
            localStorage.setItem("tema", "light");
        }
    },[tema])
  return (
    <span className='relative'>
        <img src={LightButton} alt='LightButton'
            onClick={()=>{
                setTema(tema==="light" ? "dark":"light")
            }}
            className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
            transition-all duration-300 absolute right-0 z-10 ${tema=="dark" ? "opacity-0" : "opacity-100"}`}/>

        <img src={DarkButton} alt='DarkButton'
            className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
            transition-all duration-300'/>
    </span>
  )
}

export default Darkmode