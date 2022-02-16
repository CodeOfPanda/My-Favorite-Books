import { GiBookshelf } from "react-icons/gi";


export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <GiBookshelf className="nav-logo" />
                <h1>my favorite books</h1>
            </nav>
        </>
    )
}