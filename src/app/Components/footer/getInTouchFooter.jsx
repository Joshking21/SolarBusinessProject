import Image from "next/image"
export default function GetInTouchFooter(){
    return(
        <div className="w-[25%] flex flex-col gap-4">
            <div className="flex flex-col gap-4">
            <div className="font-bold text-[1.5rem]">Get In Touch</div>
         <div className="flex flex-col gap-4">  {
                GetIntouchDetails.map((item,index)=>(
                    <div key={index} className="flex">
                        <Image src={item.icon}alt="alt" width={50} height={50} />
                        <div>
                            {item.desc}
                        </div>
                    </div>
                ))
            }
            </div> 
            </div>
            <div className="flex flex-col gap-4">
                <div className="font-bold text-[1.5rem]">Newsletter</div>
                <div>Get Solar tips and updates </div>
                <div className="flex w-full gap-4">
                    <input type="email" placeholder="Your email"></input>
                    <button className="py-[0.5rem] px-[1rem] bg-yellow-300">
                        Subscribe
                    </button>
                </div>
            </div>

        </div>
    )
}


const GetIntouchDetails = [
   { icon: "file.svg",
     desc: "+234 800 123 4567",
   },
   { icon: "file.svg",
     desc: "info@solartech.ng",
   },
   { icon: "file.svg",
     desc: "123 Solar Street, Victoria Island, Lagos, Nigeria",
   },

]