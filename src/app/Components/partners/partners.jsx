import Image from "next/image"
import { MotionFadeLeftSection } from "../framerMotion/motion"
export default function Partners(){
    return(
        <MotionFadeLeftSection >
        <div className="overflow-hidden flex bg-[#faf4e8] flex-col justify-center px-[2rem] py-[7rem] items-center ">
            <div className="font-bold text-[3rem]">
                Trusted Partnerships
            </div>
            <div className="w-full lg:p-[2rem] lg:py-[4rem] py-[4rem] justfy-center items-center   gap-6 flex flex-wrap ">
                {
                    PartnershipDetails.map((item,index)=>(
                        <div className="lg:w-[30%] bg-white p-[1rem] rounded-lg shadow-lg  flex flex-col gap-2 border-[1px] border-[var(--greyText)] justify-center items-center" key={index}>
                        <div>
                            <Image src={item.image} alt="alt" width={50} height={50} />
                        </div>
                        <div className="font-bold">
                            {item.title}
                        </div>
                        <div className="lg:inline hidden text-[#3b82f6]">{item.desc}</div>
                        <div className="lg:inline hidden text-[#5c5b59]">Partnership: {item.time}</div>
                        </div>
                    ))
                }

            </div>

            <div className="bg-black rounded-lg text-white w-full p-[2rem] flex flex-col justify-center items-center gap-7">
                <div className="text-[2rem] font-bold">Interested in Partnership?</div>
                <div>Join our network of trusted partners and help us expand clean energy access across Nigeria.</div>

                <div className=" w-full flex flex-col lg:flex-row justify-center items-center gap-7"> 
                    <button className="bg-[var(--secondary)] text-black w-full lg:w-auto py-[0.5rem]  lg:py-[0.8rem] rounded-lg lg:px-[2rem] hover:opacity-[70%]">
                        Become a Partner
                    </button >
                    <button className="bg-black  border-[2px] border-[var(--greyText)]  py-[0.2rem] w-full lg:w-auto lg:py-[0.8rem] rounded-lg lg:px-[2rem] hover:bg-white hover:border-white hover:text-black">
                        Download Partnership Guide
                    </button>
                </div>
            </div>
        </div>
        </MotionFadeLeftSection>
    )
}
const PartnershipDetails=[
    {
        image:"/file.svg",
        title:"SunPower",
        desc:"Panel Manufacturer",
        time:"4+years",
    },
     {
        image:"/file.svg",
        title:"SunPower",
        desc:"Panel Manufacturer",
        time:"4+years",
    },
     {
        image:"/file.svg",
        title:"SunPower",
        desc:"Panel Manufacturer",
        time:"4+years",
    },
     {
        image:"/file.svg",
        title:"SunPower",
        desc:"Panel Manufacturer",
        time:"4+years",
    },
]