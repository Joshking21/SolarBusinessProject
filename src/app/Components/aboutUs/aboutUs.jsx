import Image from "next/image"
export default function AboutUs(){
    return(
        <div className=" gap-6 flex flex-col py-[6rem] px-[3rem] justify-center items-center">
            <div className="font-bold text-[3rem]">About Us</div>
            <div className="flex ">
                <div className="w-1/2 p-[1rem] border-r-[3px] border-r-[var(--secondary)] text-left text-[1.1rem]">
                    We are a Nigerian-based solar company dedicated to providing reliable, affordable, and sustainable solar energy solutions to homes and businesses across the country. Our mission is to help Nigerians overcome power challenges and contribute to a greener future.”

“With years of experience in the industry, our team combines technical expertise with a passion for clean energy. We understand the unique energy needs of Nigerian communities and tailor our solutions to ensure maximum impact and satisfaction.”

“At the heart of our company is a commitment to customer care, quality installations, and long-term support. We’re not just installing solar systems — we’re partnering with you for a brighter, more sustainable tomorrow.

                </div>
                <div className="px-[2rem]">
                    <Image src="/file.svg" alt="alt" width={100} height={100} />
                </div>
            </div>

        
        </div>


    )
}