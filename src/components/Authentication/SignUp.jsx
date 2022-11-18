import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthPrvider";
import useToken from "../useHooks/useToken";

const SignUp = () => {
  const { createUser, saveName, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    // event.preventDefault();
    console.log(data);
    const { name, email, password } = data;

    createUser(email, password)
      .then((result) => {
        saveName(name)
          .then((result) => {
            userSave(name, email);
          })
          .then((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const userSave = (name, email) => {
    const data = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User created!");
        // getUserToken(email);
        setCreatedUserEmail(email);
      });
  };

  //User token

  return (
    <div className="flex justify-center my-16">
      <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-center text-4xl mt-8">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "name is required" })}
              placeholder="full name"
              className="input input-bordered"
            />
            {errors.name && (
              <p className="text-red-500 ">{errors.name?.message}</p>
            )}
          </div>
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
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="login" className="btn btn-accent" />
          </div>
        </form>
        <p className="mx-8">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary">
            LogIn
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

export default SignUp;
