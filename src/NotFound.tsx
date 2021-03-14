import { Link } from "react-router-dom";

const NotFound = () => {
	return ( 
		<div className="not-found">
			<h2>Sorry!</h2>
			<p>The page you were looking for does not exist! Darn.</p>
			<Link to="/">Click here to return back to the homepage!</Link>
		</div>
	 );
}
 
export default NotFound;