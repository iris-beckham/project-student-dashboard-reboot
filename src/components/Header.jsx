import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <header><h1 className="headerOne"><Link to="/">Student Dashboard</Link></h1></header>
    )
}

export default Header