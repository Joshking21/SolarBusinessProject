import {
  Send
} from "lucide-react";
import Link from "next/link";

export default function Message(){
    return(
        
            <div className="p-[1rem] flex flex-col gap-6">
                    <div className="font-bold text-[1.5rem]">Send Us a Message </div>
                    <div className="text-gray-600">
                        Fill out the form below and we'll get back to you within 24 hours
                    </div>


                    <div className="flex gap-6 w-full flex-wrap ">
                          

                            

                            {SubmitDetails.map((item, index)=>
                            (
                               item.title === "Service Interest" ?(
                               
                               <div key={index} className="flex flex-col font-bold gap-4">
                                <div>{item.title}</div>
                               <select
  defaultValue=""
  className="border-[1px] font-normal border-[#fcedd1] rounded-lg p-[7px]"
>
  <option value="" disabled hidden>
    Select a service...
  </option>
                                   {item.value.map((item,index)=>(
                                   <option className="hover:bg-gray-600" value={item} key={index} > {item} </option>
                                   ))}
                                   </select>
                                   </div>): (<div key={index} className="flex flex-col gap-4 w-full md:w-auto lg:w-auto">
                                    <div className="font-semibold">
                                        {item.title}
                                    </div>
                                    <input  className="border-[1px] focus:border-[#706f6b] outline-none border-[#fcedd1]  rounded-lg p-[4px]" type={item.type} placeholder={item.placeholder}></input>
                                </div>)
  
  
                            ))}
                            


                            

                        </div>



                        <div className="w-[100%] flex flex-col gap-2">
                            <div className="font-semibold">Message</div>
                            <textarea className="w-full focus:border-[#706f6b] outline-none border-[#fcedd1] rounded-lg h-[15rem] border-[1px] px-3 py-2 " type="text" placeholder="Tell us about your project, energy needs or any questions you have....."></textarea>
                        </div>
                        
                            <button className="text-center w-[100%] font-bold rounded-lg py-[0.7rem] hover:bg-black hover:text-[var(--secondary)] bg-[var(--secondary)]">
                                <Send className="w-5 inline hover:text-[var(--secondary)] font-extrabold h-5 text-black" />
                                Send Message
                            </button>
                       
                    </div>
       
    )
}



const SubmitDetails = [
    {
        title:"Full Name",
        placeholder:"Your full Name",
        type:"text",
    },
      {
        title:"Email Address",
        placeholder:"your.email@example.com",
        type:"email",
    },
      {
        title:"Phone Number",
        placeholder:"+234 123 456 7890",
        type:"tel"
    },
      {
        title:"Service Interest",
        placeholder:"Your full Name",
        value: ["residential solar", "off-grid interest"," off grid systems", "maintenance and support","Fress consultation", "Other" ],

    },
]