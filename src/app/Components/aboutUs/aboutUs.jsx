import Image from "next/image"
import { MotionFadeRightSection } from "../framerMotion/motion"
export default function AboutUs(){
    return(
        <MotionFadeRightSection>
        <div id="aboutUs" className=" flex overflow-hidden gap-6 flex-col py-[6rem] lg:px-[3rem] px-[1rem] justify-center items-center">
            <div className="font-bold text-[3rem]">About Us</div>
            <div className="flex lg:flex-row flex-col ">
                <div className="lg:w-1/2  lg:p-[1rem] p-[0.2rem] lg:border-r-[3px] lg:border-r-[var(--secondary)] lg:text-left text-[1.1rem]">
                   Hertz RE stands out as a leading rooftop solar company in Nigeria, trusted by over 100 homes 
and businesses across the nation since 2023 for expert solar panel installations. We have 
teamed up with major Nigerian financial institutions to offer flexible options and 24/7 support, 
making clean, reliable rooftop solar truly accessible to everyone.
<br></br>
<br></br>
We aim to transform Nigeria’s energy landscape by making clean, affordable, and reliable solar 
energy available to every home and business. By simplifying the adoption process and offering 
innovative, customer-centric solutions, we are driving a sustainable and equitable energy 
future
<br></br>
<br></br>
We envision a Nigeria where solar energy is the standard, empowering individuals and 
businesses to control their energy and reduce their environmental footprint.

                </div>
                <div className="px-[2rem]">
                    <Image src="/file.svg" alt="alt" width={100} height={100} />
                </div>
            </div>

        
        </div>
</MotionFadeRightSection>

    )
}