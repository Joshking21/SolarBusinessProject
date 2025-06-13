import GetInTouchFooter from "./getInTouchFooter";
import LinksFooter from "./quickLinksFooter";
import ServicesFooter from "./servicesFooter";
import SolarFooter from "./solarTechFooter";

export default function Footer(){
    return(
        <div className="overflow-hidden flex py-[2rem] px-[1rem] bg-[#111827] flex-col ">

            <div className="flex lg:flex-row flex-col gap-6 pb-[2rem]">
            
                <SolarFooter/>
                <LinksFooter/>
                <ServicesFooter/>
                <GetInTouchFooter/>
                </div>

                <div className="flex py-[2rem] lg:flex-row flex-col  lg:justify-between gap-3 border-white/70 border-t-[1px] ">
                    <div className="text-white/70 text-center">
                        2025 SolarTech Nigeria. All rights reserved
                    </div>
                    <div className="gap-4  flex ">
                        {
                            FooterBottomDetails.map((items, index)=>(
                                <div key={index} className="text-white/70 hover:text-[var(--secondary)]">
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