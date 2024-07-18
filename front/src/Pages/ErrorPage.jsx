import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>{error.data.statusText}</h1>
        <h2>{error.data.message}</h2>
      </>
    );
  }
  return (
    <>
      <h2>Something went wrong</h2>
    </>
  );
}
