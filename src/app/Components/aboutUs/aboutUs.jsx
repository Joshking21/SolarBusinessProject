import Image from "next/image"
import { MotionFadeRightSection } from "../framerMotion/motion"
export default function AboutUs(){
    return(
        <MotionFadeRightSection>
        <div id="aboutUs" className=" flex overflow-hidden gap-6 flex-col py-[6rem] lg:px-[3rem] px-[1rem] justify-center items-center">
            <div className="font-bold text-[3rem]">About Us</div>
            <div className="flex lg:flex-row flex-col ">
                <div className="lg:w-1/2  lg:p-[1rem] p-[0.2rem] lg:border-r-[3px] lg:border-r-[var(--secondary)] lg:text-left text-[1.1rem]">
                    We are a Nigerian-based solar company dedicated to providing reliable, affordable, and sustainable solar energy solutions to homes and businesses across the country. Our mission is to help Nigerians overcome power challenges and contribute to a greener future.”

“With years of experience in the industry, our team combines technical expertise with a passion for clean energy. We understand the unique energy needs of Nigerian communities and tailor our solutions to ensure maximum impact and satisfaction.”

“At the heart of our company is a commitment to customer care, quality installations, and long-term support. We’re not just installing solar systems — we’re partnering with you for a brighter, more sustainable tomorrow.

                </div>
                <div className="px-[2rem]">
                    <Image src="/file.svg" alt="alt" width={100} height={100} />
                </div>
            </div>

        
        </div>
</MotionFadeRightSection>

    )
}