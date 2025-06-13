import GetInTouchFooter from "./getInTouchFooter";
import LinksFooter from "./quickLinksFooter";
import ServicesFooter from "./servicesFooter";
import SolarFooter from "./solarTechFooter";

export default function Footer(){
    return(
        <div className="flex py-[2rem] px-[1rem] bg-[#111827] flex-col ">

            <div className="flex pb-[2rem]">
            
                <SolarFooter/>
                <LinksFooter/>
                <ServicesFooter/>
                <GetInTouchFooter/>
                </div>

                <div className="flex py-[2rem] justify-between border-white/70 border-t-[1px] ">
                    <div className="text-white/70">
                        2025 SolarTech Nigeria. All rights reserved
                    </div>
                    <div className="gap-4  flex ">
                        {
                            FooterBottomDetails.map((items, index)=>(
                                <div key={index} className="text-white/70">
                                    {items}
                                </div>
                            ))
                        }

                    </div>

                </div>

            
        </div>
    )
}

const FooterBottomDetails = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy"
]