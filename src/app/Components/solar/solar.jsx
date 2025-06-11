import Image from "next/image"
export default function Solar(){
    return(
        <div className="flex pt-[2rem] bg-[#f5f5f5] gap-9 flex-col justify-center items-center ">
        <div className="bg-yellow-300 text-center flex flex-col justify-center items-center">
        <h1 className="font-bold text-[3rem]">Why Our Solar Solutions?</h1>
        <p className="w-[70%]">We provide comprehensive solar energy solutions designed to meet your specific needs and deliver maximum value.</p>

        </div>
        <div className="flex flex-wrap gap-6 gap-y-9  pl-[1rem] ">
            {
                SolarDetails.map((item,index)=>(
                    <div className="w-[30%] p-[1.5rem] rounded-[13px] bg[var(--primary)] border-[1px]" key={index}>
                        <div className="py-[1rem] bg-[var(--secondary)">
                            <Image src={item.icon} alt="alt" width={30} height={30} />
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