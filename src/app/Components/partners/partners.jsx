import Image from "next/image"
export default function Partners(){
    return(
        <div className="flex bg-[#faf4e8] flex-col justify-center px-[2rem] py-[7rem] items-center ">
            <div className="font-bold text-[3rem]">
                Trusted Partnerships
            </div>
            <div className="w-full p-[2rem] justfy-center items-center  gap-6 flex flex-wrap">
                {
                    PartnershipDetails.map((item,index)=>(
                        <div className="w-[30%] bg-white p-[1rem] rounded-lg shadow-lg  flex flex-col gap-2 border-[1px] border-[var(--greyText)]" key={index}>
                        <div>
                            <Image src={item.image} alt="alt" width={50} height={50} />
                        </div>
                        <div className="font-bold">
                            {item.title}
                        </div>
                        <div className="text-[#3b82f6]">{item.desc}</div>
                        <div className="text-[#5c5b59]">Partnership: {item.time}</div>
                        </div>
                    ))
                }

            </div>

            <div className="bg-black rounded-lg text-white w-full p-[2rem] flex flex-col justify-center items-center gap-7">
                <div className="text-[2rem] font-bold">Interested in Partnership?</div>
                <div>Join our network of trusted partners and help us expand clean energy access across Nigeria.</div>

                <div className=" w-full flex justify-center items-center gap-7"> 
                    <button className="bg-[var(--secondary)] text-black  py-[0.8rem] rounded-lg px-[2rem] hover:opacity-[70%]">
                        Become a Partner
                    </button >
                    <button className="bg-black  border-[2px] border-[var(--greyText)] py-[0.8rem] rounded-lg px-[2rem] hover:bg-white hover:border-white hover:text-black">
                        Download Partnership Guide
                    </button>
                </div>
            </div>
        </div>
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
    }, {
        image:"/file.svg",
        title:"SunPower",
        desc:"Panel Manufacturer",
        time:"4+years",
    },
]