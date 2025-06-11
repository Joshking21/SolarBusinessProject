import Image from "next/image"
export default function CallSection(){
    return(
        <div className="gap-5 flex flex-col">
            {CallSectionDetails.map((item,index)=>(
                <div className="flex p-[1rem] gap-5" key={index}>
                    <div>  <Image src={item.icon}alt="alt" width={50} height={50} /> </div>
                    <div>
                        <div className="font-bold">
                            {item.header}
                        </div>
                        <div>
                            {item.firstTitle}<br></br>{item.secondTitle}
                        </div>
                        <div>
                            {item.desc}
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex justify-center items-center h-[15rem] bg-yellow-600">
                Maps Go in here


            </div>
            <div className="w-full p-[1rem]">
                <div className="font-bold">Emergency Support</div>
                <div>For urgent technical issues with your solar system:</div>
                <div>+234 800 SOLAR-911</div>
                <div>Available 24/7 for existing customers</div>

            </div>

          



        </div>
    )
}

const CallSectionDetails = [
    {
        icon:"file.svg",
        header:"Call Us",
        firstTitle:"+234 800 123 4567",
        secondTitle:"+234 901 234 5678",
        desc:"Mon-Fri 8AM-6PM, Sat 9AM-4PM"
    },
       {
        icon:"file.svg",
        header:"Email Us",
        firstTitle:"info@solartech.ng",
        secondTitle:"support@solartech.ng",
        desc:"We respond within 24 hours"
    },
    {
        icon:"file.svg",
        header:"Visit Us",
        firstTitle:"123 Solar Street, Victoria Island",
        secondTitle:"Lagos, Nigeria",
        desc:"Our showroom is open daily"
    },
    {
        icon:"file.svg",
        header:"Business Hours",
        firstTitle:"Mon-Fri: 8:00 AM - 6:00 PM",
        secondTitle:"Saturday: 9:00AM - 4:00 PM",
        desc:"Sunday: Closed"
    },

]