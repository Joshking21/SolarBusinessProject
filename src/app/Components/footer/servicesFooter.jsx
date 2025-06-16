export default function ServicesFooter(){
    return(
        <div  className="flex text-white/70 flex-col gap-4 lg:w-[20%] lg:items-center">
             <div className="font-bold text-white text-[1.5rem]">Services</div>

              <div className="flex flex-col gap-5">
            {ServicesFooterDetails.map((item,index)=>(
                <div key={index} className="hover:text-[var(--secondary)]">

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