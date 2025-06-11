import Image from "next/image"
import Link from "next/link"

export default function Nav(){
    return(
    <div className="flex justify-between bg-[var(--secondary)]">
        <div className="flex">
            <Image src="/file.svg" alt="alt" width={50} height={50} />
            <div className="items-center flex">
                SolarTechjj
            </div>

        </div>
        <div className="flex items-center gap-7">
           {
            NavLinks.map((item,index)=>
            (
                <div key={index}>
                    <Link href={item.link}>
                    {item.title}</Link>
                </div>
            )
            )
           }
        </div>
        <div className="flex">
            <button>Call Now</button>
            <button>Talk to Us</button>
        </div>
    </div>
    )
}

const NavLinks = [
   { title: "Home",
    link: ""},

    { title: "About Us",
    link: ""},

    { title: "Solar?",
    link: ""},

    { title: "Product & Services",
    link: ""},
    { title: "Contatc Us",
    link: "",},
]