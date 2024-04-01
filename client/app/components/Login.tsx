"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { cn } from "../utils/Classes";
import { styles } from "../styles/style";
import { SiReactrouter } from "react-icons/si";
interface Props {
  setRoute: (route: string) => void;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invlaid email")
    .required("Please enter your Email"),
  password: Yup.string().required("Please Enter Your Password"),
});
const Login: React.FC<Props> = (props) => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {},
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      <h1 className={styles.title}>Login With ELearning</h1>
      <form onSubmit={handleSubmit}>
        <label className={cn(styles.label)}>Enter Your Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Enter Email"
          className={cn(styles.input, {
            "border-red-500": errors.email && touched.email,
          })}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label className={cn(styles.label)}>Enter Your Password</label>
          <input
            type={`${show ? "password" : "text"} `}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="Enter Email"
            className={cn(styles.input, {
              "border-red-500": errors.password && touched.password,
            })}
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-2 text-black dark:text-white right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-2 right-2 z-1 cursor-pointer text-black dark:text-red-500"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
        </div>
        <div className="w-full mt-5">
          <input type="submit" value="Login" className={styles.button} />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins test-[14px] text-black dark:text-white">
          Or Join With
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle size={30} className="mr-2 cursor-pointer" />
          <AiFillGithub size={30} className="ml-2 cursor-pointer" />
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px] dark:text-white">
          Dont have any account?
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => props.setRoute("Sign-Up")}
          >
            Sign Up
          </span>
        </h5>
      </form>
      <br />
    </div>
  );
};

export default Login;
