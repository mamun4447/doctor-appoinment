import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthPrvider";
import { useState } from "react";
import useToken from "../useHooks/useToken";

const Login = () => {
  const { userLogin, googleLogin } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleLogin = (data) => {
    // console.log(data);
    const { email, password } = data;
    userLogin(email, password)
      .then((result) => {
        setLoginUserEmail(email);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex justify-center my-16">
      <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-center text-4xl mt-8">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "email is required" })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-500 ">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Legnth must be min 6 character",
                },
              })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-500 ">{errors.password?.message}</p>
            )}
            <label className="label">
              <Link to="/signup" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="login" className="btn btn-accent" />
          </div>
        </form>
        <p className="mx-8">
          Don't have an account?{" "}
          <Link to="/signup" className="text-secondary">
            SingUp
          </Link>
        </p>
        <div className="divider mx-8">OR</div>
        <div className=" mt-6 mx-8">
          <input
            type="submit"
            value="Google Login"
            className="btn btn-accent text-black hover:text-white bg-white w-full mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
