import { Link } from "react-router-dom";

const Navbar = () =>  ( 
	<nav className="navbar">
		<h1>PMA-RP</h1>
		<div className="links">
			<Link to="/">Streamers</Link>
			<Link to="/whitelist">Whitelist</Link>
			{/* <Link to="/gangs">Gangs</Link> */}
			<a href="https://pmarp.com/discord">Discord</a>
			<a href="https://store.pmarp.com/">Store</a>
		</div>
	</nav>
);
 
export default Navbar;