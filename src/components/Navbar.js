import { Link } from "react-router-dom";

const Navbar = () => {
	return ( 
		<nav className="navbar">
			<h1>PMA-RP</h1>
			<div className="links">
				<Link to="/">Streamers</Link>
				<Link to="/whitelist">Whitelist</Link>
				<a href="https://pma-rp-store.tebex.io/">Store</a>
			</div>
		</nav>
	 );
}
 
export default Navbar;