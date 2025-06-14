import Image from "next/image"
import { MotionFadeRightSection } from "../framerMotion/motion"
export default function Products(){
    return(
         <MotionFadeRightSection>
        <div id="products" className="overflow-hidden flex lg:p-[2rem] p-[1rem] bg-[#e6e5e4] py-[8rem] gap-10  flex-col justify-center items-center ">
            <div className="text-center">
            <h1 className="font-bold text-[3rem]">Solar Energy Products</h1>
                <p className="lg:text-[2rem]">
                    Discover our comprehensive range of high-quality solar products designed to meet every energy need.
                </p>
            </div>
            <div className="flex lg:flex-row  md:flex-row flex-col gap-12 flex-wrap justify-center items-center" >
                {
                    ProductDetails.map((item,index)=>(
                        <div key={index} className="lg:w-[30%] md:w-[40%]  border-[var(--greyText)] border-[1px] md:p-[0.5rem]  shadow-lg rounded-lg p-[1rem] flex flex-col hoverUp bg-white gap-y-3" >
                        <div>
                            <Image src={item.icon}alt="alt" width={100} height={100} />
                        </div>
                        <div className="font-bold">
                            {item.title}
                        </div>
                        <div>
                            {item.desc}
                        </div>
                        <div className="text-[1.5rem] text-[var(--secondary)] font-semibold">
                            {item.price}
                        </div>
                        <div>
                            {item.features.map((item,index)=>(
                                <div key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="justify-center items-center flex" >
                            <button className="py-[0.5rem] rounded-[5px] text-center bg-[var(--secondary)] w-[90%] hover:bg-black hover:text-[var(--secondary)]">Get Quote</button>
                        </div>
                        </div>
                    ))
                }

            </div>



        </div>
         </MotionFadeRightSection>
    )
}


const ProductDetails =[
    {
        icon:"/file.svg",
        title:"Residential Solar Systems",
        desc:"Complete home solar solutions designed for maximum efficiency ",
        price:"From ₦2,500,000",
        features:[
            "3kW - 15kW Systems",
            "Monocrystalline Panels",
            "Grid-Tie Inverters",
            "Net Metering Ready"
        ]
    },
     {
        icon:"/file.svg",
        title:"Commercial Solar Solutions",
        desc:"Scalable solar systems for businesses, schools, and industrial facilities",
        price:"From ₦8,000,000",
        features:[
            
"20kW - 500kW Systems",
"High-Efficiency Panels",
"Three-Phase Inverters",
"Remote Monitoring"
        ]
    },
     {
        icon:"/file.svg",
        title:"Off-Grid Solar Packages",
        desc:"Complete energy independence with battery storage and backup power",
        price:"From ₦4,500,000",
        features:[
          
"Lithium-Ion Batteries",
"MPPT Charge Controllers",
"Pure Sine Wave Inverters",
"Auto-Start Generator"
        ]
    },
     {
        icon:"/file.svg",
        title:"Solar Street Lighting",
        desc:"Intelligent LED street lights powered by solar energy",
        price:"From ₦150,000",
        features:[
          
"Motion Sensors",
"All-Night Operation",
"Weather Resistant",
"Remote Control"
        ]
    },  {
        icon:"/file.svg",
        title:"Solar Street Lighting",
        desc:"Intelligent LED street lights powered by solar energy",
        price:"From ₦150,000",
        features:[
          
"Motion Sensors",
"All-Night Operation",
"Weather Resistant",
"Remote Control"
        ]
    },  {
        icon:"/file.svg",
        title:"Solar Street Lighting",
        desc:"Intelligent LED street lights powered by solar energy",
        price:"From ₦150,000",
        features:[
          
"Motion Sensors",
"All-Night Operation",
"Weather Resistant",
"Remote Control"
        ]
    },
     
]