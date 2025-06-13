import Message from "./sendMessage"
import CallSection from "./callUs"

export default function ContactUs(){
    return(
        <div className="flex gap-7 py-[4rem] w-full mb-[6rem] flex-col h-full items-center" >
          <div className=" flex gap-4 flex-col justify-center items-center w-full">  <div className="font-bold text-[2.3rem]">
                Get In Touch
            </div>
            <div className="text-gray-600">Ready to start your solar journey? Contact our experts for a free consultation and personalized quote.</div>
            </div>

            <div className="flex w-full gap-7 justify-center">
            <div className=" w-[45%] border-[1px] rounded-lg shadow-lg border-[var(--greyText)] "> 
                <Message/>
                </div>

                <div className=" w-[45%]">
                    <CallSection/>
                </div>
            </div>


            </div>
       
    )
}