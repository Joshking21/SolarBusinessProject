export default function Message(){
    return(
        
            <div className="p-[1rem] flex flex-col gap-3">
                    <div className="font-bold text-[1.5rem]">Send Us a Message </div>
                    <div>
                        fill out the form below and we'll get back to you within 24 hours
                    </div>


                    <div className="flex bg-amber-300 ">
                        <div className="w-[50%]">
                            <div className="flex flex-col gap-4">
                            <div>
                                Full Name
                            </div>
                            <input type="text" placeholder="Your full name"></input>
                            </div>

                            <div className="flex flex-col gap-4">

                             <div >
                                Phone Number
                            </div>
                            <input type="phone" placeholder="+234 123 456 7890"></input>
</div>

                            </div>

                            <div>
                            <div className="flex flex-col gap-4">
                            <div>
                                Email Address
                            </div>
                            <input type="email" placeholder="your.email@example.com"></input>
                            </div>
                            <div className="flex flex-col gap-4">
                             <div>
                                Phone Number
                            </div>
                            <input type="phone" placeholder="+234 123 456 7890"></input>
                            </div>
                            </div>
                            


                            

                        </div>



                        <div className="w-[100%]">
                            <div>Message</div>
                            <input type="text" placeholder="Tell us about your project, energy needs or any questions you have....."></input>
                        </div>
                        
                            <button className="text-center w-[100%] rounded-[8px] py-[0.5rem] bg-green-300">
                                Send Message
                            </button>
                       
                    </div>
       
    )
}