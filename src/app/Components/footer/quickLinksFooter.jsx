export default function LinksFooter(){
    return(
        <div className="flex flex-col gap-4 w-[25%] items-center">
            <div className="font-bold text-[1.5rem]">Quick Links</div>
            <div className="flex flex-col gap-5">
            {QuickLinks.map((item,index)=>(
                <div key={index}>
                    {item}
                </div>
               
            ))}
             </div>
        </div>
    )
}

const QuickLinks = [
    "Solar Systems",
    "Products",
    "Energy Calculator",
    "Installation",
    "Maintenance"
]