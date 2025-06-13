import {
   Sun
} from "lucide-react"; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function SolarFooter(){
    return(
        <div className="lg:w-[25%] text-white/70 flex flex-col gap-4 ">
            <div className="font-bold text-white text-[1.5rem]">
                <Sun className="w-10 inline font-extrabold h-10 text-[var(--secondary)]" />

                SolarTech
            </div>
            <div>
                Nigeria's leadin solar energy company, providing reliable,affordable, and sustainable energy solutions for homes and businesses.
            </div>
            <div className="flex gap-7">
                    <Link href="href" className=" flex items-center justify-center p-[7px]  rounded-lg">  <FaFacebookF className="w-6 inline font-extrabold h-6 text-white/70 hover:text-[var(--secondary)]" /></Link>
                     <Link href="href" className=" flex items-center justify-center p-[7px]  rounded-lg">  <FaInstagram className="w-6 inline font-extrabold h-6 text-white/70 hover:text-[var(--secondary)] " /></Link>
                      <Link href="href" className=" flex items-center justify-center p-[7px] rounded-lg">  <FaLinkedinIn className="w-6 inline font-extrabold h-6 text-white/70 hover:text-[var(--secondary)]" /></Link>
                       <Link href="href" className=" flex items-center justify-center p-[7px]  rounded-lg">  <FaTwitter className="w-6 inline font-extrabold h-6 text-white/70 hover:text-[var(--secondary)] " /></Link>


                        </div>
                    
              
                
            </div>
    )
}