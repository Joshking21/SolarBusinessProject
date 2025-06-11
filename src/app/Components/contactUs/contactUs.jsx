import Message from "./sendMessage"
import CallSection from "./callUs"

export default function ContactUs(){
    return(
        <div className="flex w-full  flex-col h-full items-center" >
          <div className="bg-orange-300 flex flex-col justify-center items-center w-full">  <div className="font-bold text-[2rem]">
                Get In Touchjjkj
            </div>
            <div>Ready to start your solar journey? Contact our experts for a free consultation and personalized quote.</div>
            </div>

            <div className="flex w-full justify-center">
            <div className=" w-[45%] "> 
                <Message/>
                </div>

                <div className="bg-blue-500 w-[45%]">
                    <CallSection/>
                </div>
            </div>


            </div>
       
    )
}