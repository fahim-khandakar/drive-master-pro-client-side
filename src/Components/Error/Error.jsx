import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex h-96 max-w-6xl px-5 md:px-0 mx-auto text-center justify-center flex-col">
      <h1 className="text-lg md:text-5xl font-semibold">404 - Not Found</h1>
      <p className="mt-10">
        The page you are looking for could not be found. It may have been
        removed, had its name changed, or is temporarily unavailable. Please
        check the URL for any mistakes and try again. If you believe this is an
        error on our part, please contact our support team.
      </p>
      <Link to="/">
        <button className="btn btn-ghost mt-14">Back To Home</button>
      </Link>
    </div>
  );
};

export default Error;
