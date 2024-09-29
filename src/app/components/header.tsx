import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <ul className="header-buttons">
               
               <Link href={"/"}> <li>
                    Home
            
                </li></Link>
                <Link href ={"/about"}>
                <li>
                    About us</li></Link>
                <Link href={"/contact-us"}>
                <li>
                    Contact us</li></Link>
                    <Link href={"/jobs"}>                <li>
                    Jobs</li></Link>
            </ul>
        </div>
    )
}