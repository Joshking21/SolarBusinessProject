import Message from "./sendMessage"
import CallSection from "./callUs"
import MotionFadeInSection from "../framerMotion/motion"

export default function ContactUs(){
    return(
        <MotionFadeInSection >

        <div id="contactUs" className="overflow-hidden flex gap-7 py-[4rem] w-full px-[6px] mb-[6rem] flex-col h-full items-center" >
          <div className=" flex gap-4 flex-col justify-center items-center w-full">  <div className="font-bold text-[2.3rem]">
                Get In Touch
            </div>
            <div className="text-center text-gray-600">Ready to start your solar journey? Contact our experts for a free consultation and personalized quote.</div>
            </div>

            <div className="flex w-full  lg:flex-row flex-col gap-7 justify-center">
            <div className=" lg:w-[45%] border-[1px] rounded-lg shadow-lg border-[var(--greyText)] "> 
                <Message/>
                </div>

                <div className=" lg:w-[45%]">
                    <CallSection/>
                </div>
            </div>


            </div>
            </MotionFadeInSection>
       
    )
}