import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className="container">
        <h3>Opps! an error occured</h3>
        <p>{error.message}</p>
        </div>
  );
};

export default ErrorPage;