export default function Services(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="text-center flex flex-col items-center">
                <h1 className="font-bold text-[3rem]">Professional Services</h1>
                <p className="w-[70%] text-[1.2rem] font-semibold">From initial consultation to ongoing maintenance, we provide comprehensive services to ensure your solar investment delivers maximum value.</p>
            </div>
            <div className="flex justify-cemter  gap-8 items-center flex-wrap p-[1rem]">
                {
                    ServicesDetails.map((item,index)=>(
                      <div className="w-[30%]" key={index} >
                         <div className="font-semibold py-[1rem]">
                            {item.title}
                        </div>
                        <div className="py-[1rem]">
                                {item.desc}
                        </div>
                        <div className="py-[1rem]">
                            {item.features.map((item,index)=>(
                                <div key={index}>
                                    {item}
                                </div>

                            ))}
                        </div>
                        </div> 
                    ))
                }

            </div>

            <div className="flex flex-col gap-4 justify-center items-center bg-green-800">
                <div className="font-bold text-[2rem]">
                    Ready to Start Your Solar Journey
                </div>
                <div className="w-[70%] text-center">
                    Get a free consultation and personalized quote for your solar energy needs. Our experts are ready to help you save money and go green.
                </div>
                <div className="gap-7 flex ">
    
                        {buttonDetails.map((item,index) =>(
                            <button key={index} className="bg-amber-400 w-[11rem] h-[2.2rem] rounded-[4px]">
                                {item}
                            </button>

                        ))}
                    
                </div>
            </div>
        </div>
    )
}

const buttonDetails =[
    "Send a message",
    "Call",
    "Talk to Us",
]

const ServicesDetails=[
    {
        title:"Site Assessment & Design",
        desc: "Comprehensive evaluation of your property and custom system design",
        features:[
            
"Energy Audit",
"Roof Analysis",
"Shading Study",
"3D System Design"
        ]
    }, {
        title:"Site Assessment & Design",
        desc: "Comprehensive evaluation of your property and custom system design",
        features:[
            
"Energy Audit",
"Roof Analysis",
"Shading Study",
"3D System Design"
        ]
    }, {
        title:"Site Assessment & Design",
        desc: "Comprehensive evaluation of your property and custom system design",
        features:[
            
"Energy Audit",
"Roof Analysis",
"Shading Study",
"3D System Design"
        ]
    }, {
        title:"Site Assessment & Design",
        desc: "Comprehensive evaluation of your property and custom system design",
        features:[
            
"Energy Audit",
"Roof Analysis",
"Shading Study",
"3D System Design"
        ]
    }, {
        title:"Site Assessment & Design",
        desc: "Comprehensive evaluation of your property and custom system design",
        features:[
            
"Energy Audit",
"Roof Analysis",
"Shading Study",
"3D System Design"
        ]
    },
]