import { useForm } from "react-hook-form";
import { useToggle } from "../../hooks/useToggle";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../context/UserProvider";

function Login() {
  const [showPassword, handleTogglePassword] = useToggle(false);
  const navigate = useNavigate();
  const { fetchUser } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", data);
      localStorage.setItem("token", res.data.accessToken);
      await fetchUser(res.data.accessToken);
      navigate("/userslist", { replace: true }); // user wont be able to back
      toast.success(
        `Welcome back, ${res.data.gender === "male" ? "Mr/" : "Mrs/"} ${
          res.data.firstName
        } ${res.data.lastName}!`
      );
    } catch (error) {
      console.log(error);
      if (error.response?.status === 400) {
        setError("invalidcredentials", {
          type: "custom",
          message: error?.response?.data.message,
        });
        toast.error(error?.response?.data.message);
      } else {
        toast.error("something went wrong!");
      }
    }

    reset();
  };

  return (
    <div className="form-wrapper bg-white rounded rounded-4 p-4 shadow-md">
      <h1 className="app-title mb-5">User Management System</h1>
      <div className="text-center mb-5">
        <h2 className="form-title">Sign In</h2>
        <p className="text-muted">
          Enter your credentials to access your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.invalidcredentials && (
          <span className="text-danger text-center">
            {errors.invalidcredentials.message}
          </span>
        )}

        <div className="form-group mb-3">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernameHelp"
            placeholder="Enter Username"
            {...register("username", { required: true, minLength: 3 })}
            onChange={(e) => {
              register("username").onChange(e);
              clearErrors("invalidcredentials");
            }}
          />
          {errors.username && (
            <span className="text-danger">
              this field is required and min lenght is 3 characters
            </span>
          )}
        </div>

        <div className="form-group mb-3">
          <label className="form-label" htmlFor="loginPass">
            Password
          </label>
          <div className="position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control has-icon"
              id="loginPass"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                // pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*?.])[A-Za-z\d@#$!%*?&]{6,}$/
              })}
              onChange={(e) => {
                register("password").onChange(e);
                clearErrors("invalidcredentials");
              }}
            />
            <i
              onClick={handleTogglePassword}
              className={`fa ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              } toggle-pass input-icon`}
            ></i>
          </div>
          {errors.password && (
            <span className="text-danger">Write correct password</span>
          )}
        </div>

        <button className="main-btn w-100">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
