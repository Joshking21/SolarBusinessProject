import Image from "next/image"
import { TrendingUp, Check, Wallet } from "lucide-react";
import MotionFadeInSection from "../framerMotion/motion";


export default function Header(){
    return(
        <MotionFadeInSection>
        <div id="header" className="overflow-hidden flex flex-col items-center justify-center p-[3rem] gap-y-3 bg-[#303844] pt-[9rem] w-screen ">
            
            <div className="bg-[var(--secondary)] rounded-[10px]  p-[0.2rem] text-center"> ⭐⭐⭐⭐⭐ <br className="lg:hidden"></br> Trusted by 10,000+ customers</div>
            <div className="font-bold lg:text-[5rem] md:text-[3.5rem] text-[2rem] text-center text-[var(--background)]">
                Power Your Future with <br></br> <span className="text-[var(--secondary)]">Clean Solar Energy</span>
            </div>
            <div className="lg:text-[1.5rem] md:text-[1rem] text-center lg:text-normal  text-[1rem] text-[var(--greyText)]" >connect to reliable, stress-free solar energy solutions. Save money,<br></br> reduce your carbon footprint, and enjoy uninterrupted power supply.</div>
            <div className="py-[1rem]">
                <button className="mb-[3rem] bg-[var(--secondary)] lg:p-[1rem] p-[0.5rem]  rounded-[5px] font-bold hover:bg-black hover:text-[var(--secondary)] ">Something should be here</button>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col gap-6 lg:gap-0">
             {HeaderDetails.map((item,index)=>(
                <div key={index} className="flex flex-col justify-center items-center gap-y-3 ">
                    <div className="bg-[var(--secondary)] p-[10px] rounded-[50%] "> 
                        {index===0 ? (<TrendingUp className="w-8 font-extrabold h-8 text-black" />) : ""}
                        {index===1 ? (<Check className="w-8 h-8 text-black font-extrabold" />) : ""}
                        {index===2 ? (<Wallet className="w-8 h-8 text-black font-extrabold" />) : ""}
                    </div>
                    <div className="font-extrabold text-[var(--background)]">{item.title}</div>
                    <div className="w-[70%] text-[var(--greyText)] text-center">
                        {item.detail}
                    </div>
                </div>
             ))}

            </div>
           
        </div>
         </MotionFadeInSection>
    )
}

const HeaderDetails=[
    {
        icon:"/file.svg",
        title:"Leading Provider",
        detail:"Nigeria's most trusted solar energy company",
    },
    {
         icon:"/file.svg",
        title:"Complete Service",
        detail:"Installation, warranty, and after-sales care included",
    },
    {
         icon:"/file.svg",
        title:"Flexible Payment",
        detail:"Pay your way with cash, installments and financing",
    }
]