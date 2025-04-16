import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container">
        <h1>404 | Page Not Found</h1>
        <Link to ="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFound;