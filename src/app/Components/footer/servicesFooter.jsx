export default function ServicesFooter(){
    return(
        <div  className="flex flex-col gap-4 w-[25%] items-center">
             <div className="font-bold text-[1.5rem]">Services</div>

              <div className="flex flex-col gap-5">
            {ServicesFooterDetails.map((item,index)=>(
                <div key={index}>

                    {item}
                </div>
            ))}
            </div>
            </div>

       
    )
}
const ServicesFooterDetails = [
"Residential Solar",
"Commercial Solar",
"Off-Grid Systems",
"Battery Storage",
"Consultation"
]