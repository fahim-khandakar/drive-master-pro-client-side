import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  return (
    <div className="max-w-6xl mx-auto p-5 md:p-0 mt-10">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold font-serif text-center">
          Please Login
        </h2>
        <form onSubmit="" className="w-full md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="text-sm link link-hover">
                Forgot password?
              </a>
              <p className="text-sm">
                Do not have an account{" "}
                <Link className="text-blue-600 font-bold" to="/register">
                  Register
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ffa500]">Login</button>
          </div>
          <div className="flex justify-center mt-5">
            <button className="btn btn-ghost" onClick="">
              <FcGoogle></FcGoogle> Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
