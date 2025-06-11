import Image from "next/image"
export default function Newsletter(){
    return(
        <div className="flex justify-center items-center">
        <div className="bg-red-800 flex  " >
            <div className="w-1/2 flex flex-col justify-center items-center p-[1rem] bg-yellow-400">
            <div className="w-[80%] flex flex-col gap-4">
                <div className="w-full text-center text-[2rem] font-bold">
                    Stay Powered Up with Solar Insights
                </div>
                <div className="text-left">
                    Join 5,000+ subscribers and get the latest solar energy news, tips, and exclusive offers delivered to your inbox.
                </div>
                <div className="flex flex-col gap-4">
                    {
                        NewsletterDetails.map((item,index)=>(
                            <div key={index} className="flex gap-4">
                                <div>
                                    <Image src={item.icon} alt="alt" width={50} height={50} />
                                </div>
                                <div>
                                    <div className="font-semibold"> {item.title} </div>
                                    <div>{item.desc} </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="flex gap-4">
                    <input type="email" placeholder="Enter your email address" className="bg-red-800 p-[6px]rounded-[8px]"></input>
                    <button className="p-[6px] rounded-[4px]">Subscribe</button>
                </div>
                <div>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</div>
                </div>
            </div>




            <div className="flex w-1/2 gap-5 flex-col justify-center items-center bg-green-800">
             <div className="bg-red-300">
                <Image src="file.svg" alt="alt" width={100} height={100} />
                </div>

                {
                    CommunityDetails.map((item,index)=>(
                       <div key={index} className="bg-yellow-800 text-[1.3rem] w-1/2 py-[0.5rem] rounded-[7px] text-center">
                    <h1 className="font-semibold">{item.title}</h1>
                    <p>{item.desc}</p>
                </div>
                    ))
                }

            </div>
        </div>
        </div>
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