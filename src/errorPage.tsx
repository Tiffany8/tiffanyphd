import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage: () => JSX.Element = (): JSX.Element => {
  const error = useRouteError()
  if (!isRouteErrorResponse(error)) {
    return <></>
  }
  console.error(error)

  return (
    <div
      id="error-page"
      className="relative mx-auto mb-10 flex h-screen flex-col items-center justify-center gap-4 bg-gradient-to-r from-fuschia via-violet to-bluepurple-light px-4 text-white"
    >
      <h1 className="font-satisfy text-8xl">Whoopsies!</h1>
      <p className="font-roborto text-4xl">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="font-roborto text-2xl">
        <i>{error.statusText || error.data.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
