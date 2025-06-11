import Image from "next/image"
export default function Header(){
    return(
        <div className="flex flex-col items-center justify-center p-[3rem] gap-y-3 bg-red-400 pt-[5rem]">
            <div className="bg-[var(--secondary)] rounded-[10px] px-[3rem]">Trusted by 10,000+ customers</div>
            <div className="font-bold bg-green-800 text-[5rem] text-center">
                Power Your Future with <br></br> <span className="text-[var(--secondary)]">Clean Solar Energy</span>
            </div>
            <div className="text-[1.5rem]" >connect tp reliable, stress-free solar energy solutions. Save money,<br></br> reduce your carbon footprint, and enjoy uninterrupted power supply.</div>
            <div className="py-[1rem]">
                <button className=" bg-[var(--secondary)] p-[1rem] rounded-[3px]">Something should be here</button>
            </div>
            <div className="flex gap-16">
             {HeaderDetails.map((item,index)=>(
                <div key={index} className="flex flex-col justify-center items-center gap-y-3 bg-green-700">
                    <div> 
                        <Image src={item.icon} alt="alt" width={40} height={40} />
                    </div>
                    <div>{item.title}</div>
                    <div className="w-[70%]  text-center">
                        {item.detail}
                    </div>
                </div>
             ))}

            </div>
        </div>
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