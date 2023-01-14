import {useRouteError} from "react-router-dom";
import {Card} from "react-bootstrap";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Card className="text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </Card>
    );
}