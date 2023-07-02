
const Header = () =>{
    return(
        <nav className="flex justify-between p-6 bg-[#9ED5C5]">
            <h1 className="text-5xl font-semibold text-[#2F2E41]">TalentFlow</h1>
            <ul className="flex justify-between w-56 items-center text-[#2F2E41] text-xl">
                <li><a href="#">Login/Sign-Up</a></li>
                <li><a href="#">Search</a></li>
            </ul>
        </nav>
    )
}

export default Header