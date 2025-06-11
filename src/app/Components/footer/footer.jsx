import GetInTouchFooter from "./getInTouchFooter";
import LinksFooter from "./quickLinksFooter";
import ServicesFooter from "./servicesFooter";
import SolarFooter from "./solarTechFooter";

export default function Footer(){
    return(
        <div className="flex py-[3rem] flex-col ">

            <div className="flex">
            
                <SolarFooter/>
                <LinksFooter/>
                <ServicesFooter/>
                <GetInTouchFooter/>
                </div>

                <div className="flex py-[2rem] justify-between">
                    <div>
                        2025 SolarTech Nigeria. All rights reserved
                    </div>
                    <div className="gap-4  flex ">
                        {
                            FooterBottomDetails.map((items, index)=>(
                                <div key={index}>
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