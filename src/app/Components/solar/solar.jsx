import Image from "next/image"
import{ Zap, Shield, Wrench, BadgeNaira, Leaf, Clock } from "lucide-react"
export default function Solar(){
    return(
        <div className="flex py-[7rem] bg-[#faf4e8] gap-9 flex-col justify-center items-center ">
        <div className=" text-center flex flex-col justify-center items-center">
        <h1 className="font-bold text-[3rem]">Why Our Solar Solutions?</h1>
        <p className="w-[70%] ">We provide comprehensive solar energy solutions designed to meet your specific needs and deliver maximum value.</p>

        </div>
        <div className="flex flex-wrap gap-6 gap-y-9  pl-[1rem] ">
            {
                SolarDetails.map((item,index)=>(
                    <div className="w-[30%] p-[1.5rem] rounded-lg shadow-lg bg-[var(--background)]" key={index}>
                        <div className="py-[1rem] bg-[var(--secondary)] p-[10px] rounded-[50%] w-fit">
                                {index===0 ? (<Zap className="w-12 h-12  font-extrabold text-black" />) : ""}
                        {index===1 ? (<Shield className="w-12 h-12 text-black font-extrabold" />) : ""}
                        {index===2 ? (<Wrench className="w-12 h-12 text-black font-extrabold" />) : ""}
                            {index===3 ? (<span className="text-black p-[1rem] font-extrabold text-4xl">₦</span>) : ""}
                                                {index===4 ? (<Leaf className="w-12 h-12 text-black font-extrabold" />) : ""}
                                                {index===5 ? (<Clock className="w-12 h-12 text-black font-extrabold" />) : ""}
                        </div>
                        <div className="font-bold py-[1rem]">
                            {item.title}
                        </div>
                        <div>
                            {item.desc}
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )

}

const SolarDetails=[
    {
        icon:"/file.svg",
        title:"High Efficiency Panels",
        desc:"Latest technology solar panels with up to 22% efficiency rating for maximum power generation."
    },{
        icon:"/file.svg",
        title:"25-Year Warranty",
        desc:"Comprehensive warranty coverage on all solar panels and inverters for peace of mind."
    },{
        icon:"/file.svg",
        title:"Significant Savings",
        desc:"Reduce your electricity bills by up to 90% with our efficient solar solutions."
    },{
        icon:"/file.svg",
        title:"Eco-Friendly",
        desc:"Reduce your carbon footprint and contribute to a cleaner, greener environment."
    },{
        icon:"/file.svg",
        title:"24/7 Support",
        desc:"Round-the-clock customer support and maintenance services for uninterrupted power."
    }

]