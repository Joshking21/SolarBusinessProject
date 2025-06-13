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
    <div className={`flex fixed top-0 w-full transition-transform duration-300 ease-in-out justify-between bg-[var(--secondary)] z-50 ${
    ShowNav ? 'translate-y-0' : '-translate-y-full'
  }`}>
        <div className="flex gap-2 p-[0.7rem]">
            <Sun className="w-8 h-8 text-blacktransition-colors" />
            <div className="items-center text-[1.5rem] font-bold flex">
                SolarTech
            </div>

        </div>
        <div className="flex items-center gap-7">
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
        <div className="flex gap-4 justify-center  items-center px-[1rem]">
            <button className="bg-[var(--background)] text-[var(--foreground)] h-[60%] px-[1rem] rounded-[4px] hover:bg-[var(--foreground)] hover:text-[var(--secondary)] border-[1px] border-solid border-[var(--foreground)]">Call Now</button>
            <button className="bg-[var(--foreground)] text-[var(--secondary)] h-[60%] px-[1rem] rounded-[4px] hover:opacity-[70%]">Talk to Us</button>
        </div>
    </div>
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
]