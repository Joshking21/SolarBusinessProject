import Image from "next/image"
import {
  Phone,
  Mail,
  Send,
  MapPin,
  Clock,
   AlertTriangle, 
} from "lucide-react";
export default function CallSection(){
    return(
        <div className="gap-5  flex flex-col">
            {CallSectionDetails.map((item,index)=>(
                <div className="flex p-[1.5rem] gap-5 border-[1px] border-[var(--greyText)] rounded-lg shadow-lg" key={index}>
                    <div className="bg-[var(--secondary)] w-15 h-15  flex items-center justify-center rounded-[50%] ">   {index===0 ? (<Phone className="w-8 font-extrabold h-8 text-black" />) : ""}
                     {index===1 ? (<Mail className="w-8 font-extrabold h-8 text-black" />) : ""}
                     {index===2 ? (<MapPin className="w-8 font-extrabold h-8 text-black" />) : ""}
                      {index===3 ? (<Clock className="w-8 font-extrabold h-8 text-black" />) : ""}
                       {index===4 ? (<Clock className="w-8 font-extrabold h-8 text-black" />) : ""}
                     

                    
                    
                    
                    </div>
                    <div>
                        <div className="font-bold">
                            {item.header}
                        </div>
                        <div className="text-gray-600">
                            {item.firstTitle}<br></br>{item.secondTitle}
                        </div>
                        <div className="text-gray-600">
                            {item.desc}
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex justify-center items-center h-[15rem] bg-yellow-600">
                Maps Go in here


            </div>

            
              
            <div className="w-full flex gap-2 p-[1.5rem] bg-red-100 rounded-lg shadow-lg border-l-[5px] border-l-red-500 ">
                  <div className="bg-white w-15 h-15  flex items-center justify-center rounded-[50%] " > < AlertTriangle className="w-8 font-extrabold h-8 text-red-500" /> </div>

                <div className="flex flex-col gap-2 ">
                <div className="font-bold">Emergency Support</div>
                <div className="text-gray-600" >For urgent technical issues with your solar system:</div>
                <div className="text-red-500 font-bold">+234 800 SOLAR-911</div>
                <div className="text-gray-400" >Available 24/7 for existing customers</div>
                </div>

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