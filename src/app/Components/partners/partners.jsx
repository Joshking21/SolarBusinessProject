import Image from "next/image"
export default function Partners(){
    return(
        <div className="flex flex-col justify-center items-center bg-red-800">
            <div className="font-bold text-[3rem]">
                Trusted Partnerships
            </div>
            <div className="w-full p-[2rem] justfy-center items-center bg-yellow-800  gap-6 flex flex-wrap">
                {
                    PartnershipDetails.map((item,index)=>(
                        <div className="w-[30%] flex flex-col gap-2 bg-green-800" key={index}>
                        <div>
                            <Image src={item.image} alt="alt" width={50} height={50} />
                        </div>
                        <div className="font-bold">
                            {item.title}
                        </div>
                        <div>{item.desc}</div>
                        <div>Partnership: {item.time}</div>
                        </div>
                    ))
                }

            </div>

            <div className="bg-white w-full p-[1rem] flex flex-col justify-center items-center gap-5">
                <div className="text-[2rem] font-bold">Interested in Partnership?</div>
                <div>Join our network of trusted partners and help us expand clean energy access across Nigeria.</div>

                <div className="bg-red-600 w-full flex justify-center items-center gap-7"> 
                    <button className="bg-green-700 rounded-[4px] py-[0.5rem] px-[2rem]">
                        Become a Partner
                    </button >
                    <button className="bg-green-700 py-[0.5rem] px-[2rem]">
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
        desc:"Panel MAnufacturer",
        time:"4+years",
    },
     {
        image:"/file.svg",
        title:"SunPower",
        desc:"Panel MAnufacturer",
        time:"4+years",
    },
     {
        image:"/file.svg",
        title:"SunPower",
        desc:"Panel MAnufacturer",
        time:"4+years",
    },
     {
        image:"/file.svg",
        title:"SunPower",
        desc:"Panel MAnufacturer",
        time:"4+years",
    }, {
        image:"/file.svg",
        title:"SunPower",
        desc:"Panel MAnufacturer",
        time:"4+years",
    },
]