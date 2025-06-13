import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,

   
} from "lucide-react"; 

export default function GetInTouchFooter(){
    return(
        <div className="lg:w-[25%] text-white/70 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
            <div className="font-bold text-white text-[1.5rem]">Get In Touch</div>
         <div className="flex flex-col gap-4">  {
                GetIntouchDetails.map((item,index)=>(
                    <div key={index} className="flex mr-[5px]">
                         {index===0 ? (<Phone className="w-7 mr-[5px] font-extrabold h- text-[var(--secondary)]" />) : ""}
                          {index===1 ? (<Mail className="w-7 mr-[5px] font-extrabold h-7 text-[var(--secondary)]" />) : ""}
                           {index===2 ? (<MapPin className="w-7 mr-[5px] font-extrabold h-7 text-[var(--secondary)]" />) : ""}
                        <div>
                            {item.desc}
                        </div>
                    </div>
                ))
            }
            </div> 
            </div>
            <div className="flex flex-col  gap-4">
                <div className="font-bold text-white text-[1.5rem]">Newsletter</div>
                <div>Get Solar tips and updates </div>
                <div className="flex lg:flex-row flex-col w-full gap-2">
                    <input className="border-white/70 border-[1px] p-[3px] rounded-lg" type="email" placeholder="Your email"></input>
                    <button className="py-[0.5rem] rounded-lg px-[1rem] bg-yellow-300">
                        Subscribe
                    </button>
                </div>
            </div>

        </div>
    )
}


const GetIntouchDetails = [
   { icon: "file.svg",
     desc: "+234 800 123 4567",
   },
   { icon: "file.svg",
     desc: "info@solartech.ng",
   },
   { icon: "file.svg",
     desc: "123 Solar Street, Victoria Island, Lagos, Nigeria",
   },

]