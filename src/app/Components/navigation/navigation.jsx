import Image from "next/image"
import Link from "next/link"
import { Sun } from 'lucide-react';



export default function Nav(){
    return(
    <div className="flex justify-between bg-[var(--secondary)]">
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
    link: ""},

    { title: "About Us",
    link: ""},

    { title: "Solar?",
    link: ""},

    { title: "Product & Services",
    link: ""},
    { title: "Contact Us",
    link: "",},
]