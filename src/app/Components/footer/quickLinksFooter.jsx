export default function LinksFooter(){
    return(
        <div className="flex text-white/70 flex-col gap-4 lg:w-[25%] lg:items-center">
            <div className="font-bold text-white text-[1.5rem]">Quick Links</div>
            <div className="flex flex-col gap-5">
            {QuickLinks.map((item,index)=>(
                <div key={index} className="hover:text-[var(--secondary)]">
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