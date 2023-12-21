import './style.css';
const Navbar = () =>{
    return(
        <nav>
            <div className="logo">
                <img src="/images/brand_logo.png" alt="bran_logo" />
            </div>
            <ul className="menu">
                <li className="menu-item" href="#">Menu</li>
                <li className="menu-item" href="#">Location</li>
                <li className="menu-item" href="#">About</li>
                <li className="menu-item" href="#">Contact</li>
            </ul>
            <button className="log-btn">Login</button>
        </nav>
    )
}

export default Navbar;