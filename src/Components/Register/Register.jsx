import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import swal from "sweetalert";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInWithGoogle, createUser } = useContext(AuthContext);
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 6) {
      return swal(
        "Error!",
        "Password should be at least 6 characters!",
        "error"
      );
    } else if (!/[A-Z]/.test(password)) {
      return swal("Error!", "Password must have a capital letter!", "error");
    } else if (!/[^a-zA-Z0-9\s]/.test(password)) {
      return swal("Error!", "Password must have a special character!", "error");
    }

    createUser(email, password, name)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            navigate(location?.state ? location.state : "/");
          })
          .catch();
        swal("Success!", "Successfully Account Created", "success");
        e.target.reset();
      })
      .catch((error) => {
        swal("Error!", error.message, "error");
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        swal("Success!", "Successfully Account Created", "success");
      })
      .catch((error) => {
        swal("Error!", error.message, "error");
      });
  };
  return (
    <div className="max-w-6xl mx-auto p-5 md:p-0 mt-32">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold font-serif text-center">
          Please Register
        </h2>
        <form
          onSubmit={handleRegister}
          className="w-full md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>

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
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="text-sm link link-hover">
                Forgot password?
              </a>
              <p className="text-sm">
                Already have an account{" "}
                <Link className="text-blue-600 font-bold" to="/login">
                  Login
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ffa500]">Register</button>
          </div>
          <div className="flex justify-center mt-5">
            <button className="btn btn-ghost" onClick={handleLoginWithGoogle}>
              <FcGoogle></FcGoogle> Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
