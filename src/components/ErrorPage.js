import { useRouteError } from "react-router-dom"
const ErrorPage = () => {

    const myError = useRouteError()

    return (
        <div className="text-center mt-20">
            <h2 className="text-red-500 font-bold">Error : {myError.error.message}</h2>
            <h2 className="text-red-500 font-bold">Status : {myError.status}</h2>
            <p>This page isn't available. Sorry about that.
            <br></br>Try something else.</p>
        </div>
    )
};

export default ErrorPage;