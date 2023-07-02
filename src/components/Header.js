import { Link } from "react-router-dom"

const Header = () =>{
    return(
        <nav className="flex justify-between p-6 bg-[#9ED5C5]">
            <h1 className="text-5xl font-semibold text-[#2F2E41]">TalentFlow</h1>
            <ul className="flex justify-between w-56 items-center text-[#2F2E41] text-xl">
                <li><Link to="/login">Login/Sign-Up</Link></li>
                <li><Link to="/search">Search</Link></li>
            </ul>
        </nav>
    )
}

export default Header