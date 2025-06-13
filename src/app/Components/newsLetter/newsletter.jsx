import { TrendingUp,Lightbulb, Gift, Mail } from "lucide-react";
import { MotionFadeLeftSection } from "../framerMotion/motion";
import Image from "next/image"
export default function Newsletter(){
    return(
        <MotionFadeLeftSection>
        <div className="overflow-hidden flex lg:flex-row flex-col bg-gradient-to-br from-[var(--secondary)] to-[var(--fifth)] lg:p-[8rem] p-[0.3rem] lg:py-[7rem] py-[2rem]  justify-center items-center">
        <div className=" flex lg:flex-row flex-col-reverse p-[0.2rem] lg:p-0 " >
            <div className="lg:w-1/2 flex flex-col justify-center items-center py-[1.5rem] rounded-t-none lg:p-[1.5rem] bg-white rounded-lg">
            <div className="lg:w-[80%] w-[90%] flex flex-col gap-6">
                <div className="w-full text-center text-[2rem] font-bold">
                    Stay Powered Up with Solar Insights
                </div>
                <div className="text-left font-light">
                    Join 5,000+ subscribers and get the latest solar energy news, tips, and exclusive offers delivered to your inbox.
                </div>
                <div className="flex flex-col gap-4">
                    {
                        NewsletterDetails.map((item,index)=>(
                            <div key={index} className="flex gap-4">
                                <div className="bg-[var(--third)] w-15 h-15  flex items-center justify-center rounded-[50%]">
                                    {index===0 ? (<TrendingUp className="w-8 font-extrabold h-8 text-white" />) : ""}
                                    {index===1 ? (<Lightbulb className="w-8 font-extrabold h-8 text-white" />) : ""}
                                    {index===2 ? (<Gift className="w-8 font-extrabold h-8 text-white" />) : ""}
                                </div>
                                <div>
                                    <div className="font-semibold"> {item.title} </div>
                                    <div className="text-[#5c5b59]">{item.desc} </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="flex lg:flex-row flex-col  gap-4">
                    <input type="email" placeholder="Enter your email address" className="border-[1px] border-[#fcedd1] p-[6px] rounded-lg"></input>
                    <button className="p-[6px] rounded-lg bg-[var(--secondary)] hover:bg-black hover:text-[var(--secondary)] ">Subscribe</button>
                </div>
                <div className="font-extralight text-[#5c5b59]">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</div>
                </div>
            </div>




            <div className="flex rounded-lg rounded-b-none lg:rounded-r-lg lg:w-1/2 gap-5 flex-col lg:py-0 py-[2rem] justify-center items-center bg-gradient-to-br from-[var(--secondary)] to-[var(--fourth)]">
             <div className="">
                <Mail className="w-30  font-extrabold h-30 text-black" />
                </div>
                <div className="font-bold text-center text-[2rem]">
                Join Our Community
                </div>

                {
                    CommunityDetails.map((item,index)=>(
                       <div key={index} className="bg-[#ffffff]/50 text-[1.3rem] lg:w-1/2 w-[80%] py-[0.5rem] rounded-[7px] text-center">
                    <h1 className="font-semibold">{item.title}</h1>
                    <p>{item.desc}</p>
                </div>
                    ))
                }

            </div>
        </div>
        </div>
        </MotionFadeLeftSection>
    )
}

const CommunityDetails=[
    {
        title: "5,000+",
        desc: "Active Subscribers"
    },
    {
        title: "Weekly",
        desc: "Solar Tips & Updates"
    },
    {
        title: "Exclusive",
        desc: "Offers & Discounts"
    },
]


const NewsletterDetails = [
    {
        icon:"file.svg",
        title:"Market Insights",
        desc:"Latest solar industry trends and market updates"
    },
    {
        icon:"file.svg",
        title:"Energy Tips",
        desc:"Practical tips to maximize your solar savings"
    },
      {
        icon:"file.svg",
        title:"Exclusive Offers",
        desc:"Special discounts and promotions for subscribers"
    },
]