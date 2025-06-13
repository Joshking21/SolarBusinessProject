import Link from "next/link"
import Image from "next/image"
import MotionFadeInSection from "../framerMotion/motion"

export default function Testimonial(){
    return(
        <MotionFadeInSection>

        <div id="testimonial" className=" overflow-hidden flex bg-[#e0dede] flex-col items-center justify-center text-center px-[0.5rem] lg:px-[3rem] py-[5rem] gap-y-5">
            <div>
                <div className="font-bold flex flex-col gap-4  text-[2rem]">
                    What Our Customers Say
                </div>
                <div className="text-[1rem]">
                    Join thousands of satisfied customers who have made the switch to clean, reliable solar energy.
                </div>

            </div>
            <div className=" flex flex-wrap lg:flex-row flex-col items-center justify-center w-full lg:p-[1rem]  lg:gap-6 gap-3">
                {TestimonialDetails.map((item,index)=>(
                    <div key={index} className="flex shadow-lg rounded-lg p-[1rem] gap-5 lg:w-[40%] flex-col border-[1px] border-[var(--greyText)] bg-white">
                        <div>
                            {item.desc}
                        </div>
                        <div className="flex justify-between">
                            <div>
                               <span className="font-bold"> {item.name}</span> <br></br> 
                               <span className="text-green-600">{item.address}</span>
                            </div>
                            <div >
                                <Image className="rounded-[50%]" src={item.photo} alt="alt" width={50} height={50} />
                            </div>

                        </div>



                    </div>
                ))}

            </div>
        </div>
        </MotionFadeInSection>
    )
}



const TestimonialDetails =[
    {
         name:"Sarah JohnSon",
        desc:"\"SolarTech transformed our home! We've cut our electricity bills by 85% and haven't had power outages since installation. \"",
        address:"Lagos, Nigeria",
        photo:"/file.svg"
       
    },
    {
         name:"Micheal Okafor",
        desc:"\"Best investment we've made for our business. The commercial solar system pays for itself and our employees love the reliable power. Customer service is exceptional.\"",
        address:"Abuja, Nigeria",
        photo:"/file.svg"
       
    },
    {
         name:"Fatima Ahmed",
        desc:"\"The off-grid system has given us complete energy independence. No more generator noise or fuel costs. The battery backup works perfectly during cloudy days.\"",
        address:"Kano, Nigeria",
        photo:"/file.svg"
       
    },
    {
         name:"David Adebayo",
        desc:"\"Omo, The last time i on gen na like 5 months ago, my pikin day sleep well without stress and nepa no fit do me shakara again,e day sweet my belle well well\"",
        address:"Port Harcourt, Nigeria",
        photo:"/file.svg"
       
    },
]