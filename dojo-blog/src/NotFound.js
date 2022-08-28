import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 not found</h2>
            <div>this page is not available</div>
            <Link to='/'> Back to homepage</Link>
        </div>
     );
}
 
export default NotFound;