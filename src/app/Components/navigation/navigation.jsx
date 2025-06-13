'use client'

import Image from "next/image"
import Link from "next/link"
import { Sun } from 'lucide-react';
import {useState, useEffect, useRef } from 'react';



export default function Nav(){
      const [ShowNav,setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isOpen,setIsOpen] = useState(false);
    

    useEffect(() =>{
        const handleScroll = () =>{
            const currentScrollY = window.scrollY;
            if(currentScrollY > lastScrollY){
                setShowNav(false);
            } else{
                setShowNav(true);
            }
           setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll)
    },[lastScrollY]);











    return(
    <div className={` flex fixed top-0 lg:w-full w-screen transition-transform duration-300 ease-in-out justify-between bg-[var(--secondary)] z-50 ${
    ShowNav ? 'translate-y-0' : '-translate-y-full'
  }`}>
        <div className="flex gap-2 p-[0.7rem] items-center justify-center">
            <Sun className="w-10 h-10 lg:w-8 lg:h-8 text-blacktransition-colors" />
            <div className="items-center lg:text-[1.5rem] text-[2rem] font-bold flex">
                SolarTech
            </div>

        </div>
        <div className="lg:flex hidden  items-center gap-7">
           {
            NavLinks.map((item,index)=>
            (
                <div key={index}>
                    <Link href={item.link} className="font-semibold hover:opacity-[70%]">
                    {item.title}</Link>
                </div>
            )
            )
           }
        </div>
        <div className="flex flex-row  lg:flex-col gap-3 lg:gap-4 justify-center  items-center">
         
         <div className="lg:flex hidden flex-col  lg:flex-row gap-3 py-[5px] lg:gap-4 justify-center  items-center px-[1rem]">
            <button className="bg-[var(--background)] text-[var(--foreground)] h-[60%] lg:h-full px-[1rem] lg:py-[0.5rem] rounded-[4px] hover:bg-[var(--foreground)] hover:text-[var(--secondary)] border-[1px] border-solid border-[var(--foreground)]">Call Now</button>
            <button className="bg-[var(--foreground)] lg:h-full text-[var(--secondary)] h-[60%] px-[1rem] rounded-[4px] hover:opacity-[70%]">Talk to Us</button>
            </div>

            <div className='lg:hidden' >
<XButton  isOpen={isOpen} setIsOpen={setIsOpen}/>
</div>
        </div>

        {useEffect(() => { 
    isOpen?setIsOpen(ShowNav):""
},[ShowNav])}
      <div className={`-translate-y-[147%] absolute w-full  ${
    isOpen ? 'translate-y-18' : '-translate-y-[147%]'
  }  transition-transform duration-500 ease-in-out lg:hidden `}>
    {console.log(isOpen)}

            <Navslide/>
        </div>

    </div>





    )
}








function XButton({isOpen,setIsOpen}){

        return(
            <button onClick={() => setIsOpen(!isOpen)} className='flex flex-col justify-center items-center w-10 h-10 focus:outline-none' >
<span  className={`block w-8 h-0.5 bg-black rounded transition-transform duration-300 ease-in-out ${isOpen?'rotate-45 translate-y-1.5':''} my-1 `}></span>
  <span
        className={`block w-8 h-0.5 bg-black rounded transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : 'opacity-100'
        } `}
      ></span>
      <span
        className={`block w-8 h-0.5 bg-black rounded transition-transform duration-300 ease-in-out ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        } my-1`}
      ></span>

</button>
        )
    }



    function Navslide(){
        return(
            <>
             {
                NavLinks.map((item,index)=>(
                    <div key={index} className='flex justify-center w-full items-center bg-white/80 border-b-[0.01px] border-black/10' >
                   
                    <Link key={index} className='cursor-pointer group-hover:opacity-50 flex items-center py-[0.8rem] hover:opacity-100
                    transition-opacity duration-500 ease-in-out ' href={item.link}>{item.title}</Link>
</div>
                ))}
              
              <div className="flex flex-col  lg:flex-row gap-3 py-[5px] lg:gap-4 justify-center bg-white/80  items-center px-[1rem]">
            <button className="bg-[var(--background)] text-[var(--foreground)] h-[90%] py-[0.2rem] lg:h-full w-[90%] lg:py-[0.5rem] rounded-[4px] hover:bg-[var(--foreground)] hover:text-[var(--secondary)] border-[1px] border-solid border-[var(--foreground)]">Call Now</button>
            <button className="bg-[var(--foreground)] lg:h-full text-[var(--secondary)] h-[90%] py-[0.2rem]  w-[90%] rounded-[4px] hover:opacity-[70%]">Talk to Us</button>
            </div>
            </>
        )
    }

const NavLinks = [
   { title: "Home",
    link: "#header"},

    { title: "About Us",
    link: "#aboutUs"},

    { title: "Solar?",
    link: "#solar"},

    { title: "Product & Services",
    link: "#products"},
    { title: "Contact Us",
    link: "#contactUs",},
     { title: "Testimonial",
    link: "#testimonial",},
     { title: "FAQ",
    link: "#faq",},
]