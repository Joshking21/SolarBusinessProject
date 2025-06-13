'use client'

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { MotionFadeRightSection } from "../framerMotion/motion";


export default function FAQ(){

    const [isOpen, setIsOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null)

      const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // close if already open
    } else {
      setOpenIndex(index); // open the clicked div, close others
    }
  };

    return(
        <MotionFadeRightSection >

        <div id="faq" className="flex flex-col items-center justify-center text-center lg:p-[3rem] p-[1rem] lg:py-[5rem] py-[5rem] gap-y-5">
         <div>   <div className="font-bold flex flex-col gap-4  text-[2rem]">
                Common Questions About Solar Energy
            </div>
            <div className="text-[1rem]">
                Find answers to the most common questions about solar energy, installation, and maintenance.
            </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full  gap-6">
                {Questions.map((item,index)=>{
                     const isOpen = openIndex === index;
              return(      <div data-index={index} key={index} onClick={(e) => {
                        toggle(index)
    } }className={`flex lg:w-[70%] hoverUp flex-col border-[1px]  h-[4rem] overflow-hidden border-[var(--greyText)] border-l-none rounded-lg shadow-lg p-[9px] transition-all duration-300
                     ${isOpen   ?"h-auto border-l-[5px] border-l-[var(--secondary)]  ":"lg:h-4rem h-[6rem] "}
                   
                     `}
                    
                    
                    >
                        <div className="flex justify-between p-[1rem]">
                        <div className="font-bold"> {item.title}</div>
                        {isOpen ?(<ChevronUp className="w-5 h-5 text-[var(--secondary)]" />):(<ChevronDown className="w-5 h-5 text-gray-600" />)}


                        
                        </div>
                        <div className="text-black/80 px-[1rem]">
                            {item.desc}
                        </div>


                    </div>)
})}

            </div>
        </div>
        </MotionFadeRightSection>
    )
}

const Questions = [
    {
        title:"How do solar panels work",
        desc: "Solar panels work by allowing photons, or particles of light, to knock electrons free from atoms, generating a flow of electricity. Solar panels are comprised of many small photovoltaic cells linked together, which convert sunlight into electricity. This electricity can then be used to power your home or business"
    },
       {
        title:"How can i save with solar energy?",
        desc: "Savings vary depending on your energy consumption, local electricity rates, and system size. Most homeowners save between 50-90% on their electricity bills. Our energy calculator can provide you with a personalized estimate based on your specific situation."
    },   {
        title:"What happens during a power outage?",
        desc: "Standard grid-tied solar systems will shut down during a power outage for safety reasons. However, systems with battery backup can continue to provide power to your essential appliances during outages. We offer various battery storage solutions that can be integrated with your solar system."
    },   {
        title:"How long do solar panels last?",
        desc: "Most solar panels come with a 25-30 year warranty and can continue producing electricity for even longer. The efficiency may decrease slightly over time (about 0.5% per year), but quality solar panels will still be operating at 80-85% efficiency after 25 years."
    },   {
        title:"Do solar panels work during rainy or cloudy days?",
        desc: "Yes, solar panels can still generate electricity on cloudy or rainy days, although at reduced efficiency. Modern solar panels work even in low-light conditions. Additionally, your system is designed to generate excess energy on sunny days, which balances out the lower production during cloudy periods."
    },   {
        title:"How much maintenance do solar require?",
        desc: "Solar panels require minimal maintenance. Occasional cleaning to remove dust and debris is recommended, typically 1-2 times per year. Our systems include monitoring software that alerts us if there are any performance issues, and our maintenance packages ensure your system continues to operate at peak efficiency."
    },   {
        title:"How long does the installation process take?",
        desc: "The physical installation of a residential solar system typically takes 1-3 days. However, the entire process, including site assessment, design, permitting, and grid connection, usually takes 2-3 months. Commercial installations may take longer depending on the system size and complexity."
    },   {
        title:"Can i install solar panels on any type of roof?",
        desc: "Solar panels can be installed on most roof types, including asphalt shingle, metal, tile, and flat roofs. During the site assessment, our engineers will evaluate your roof's condition, orientation, and shading to determine the optimal installation approach. If your roof isn't suitable, ground-mounted systems are also an option."
    },
]