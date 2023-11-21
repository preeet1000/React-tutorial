import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const error = useRouteError();
    return (
        <>
        <h1>oooops !!</h1>
        <h3>Something happen wrong</h3>
        <h4>{error?.status + '  ' +  error?.statusText}</h4>
        </>
    )
}

export default ErrorComponent;