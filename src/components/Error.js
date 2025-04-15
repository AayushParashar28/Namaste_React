import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Opps !!!</h1>
            <h2>Something Went Wrong</h2>
        </div>
    )
}

export default Error;