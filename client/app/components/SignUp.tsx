"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
  AiOutlineInsertRowRight,
} from "react-icons/ai";
import { cn } from "../utils/Classes";
import { styles } from "../styles/style";
import { SiReactrouter } from "react-icons/si";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
interface Props {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invlaid email")
    .required("Please enter your Email"),
  name: Yup.string().required("Please enter your name"),
  password: Yup.string()
    .min(6, "At Least 6 characters")
    .required("Please Enter Your Password"),
});
const SignUp: React.FC<Props> = (props) => {
  const { setRoute, setOpen } = props;
  const [register, { isError, data, isSuccess, error }] = useRegisterMutation();
  const formik = useFormik({
    initialValues: { email: "", password: "", name: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password, name }) => {
      console.log("submit");
      const data = { name, email, password };
      await register(data);
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const message = data.message || "Registration successfull";
      toast.success(message);
      setRoute("Verification");
    } else if (isError) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, setRoute, data, isError, error]);
  return (
    <div className="w-full">
      <h1 className={styles.title}>Sign Up With ELearning</h1>
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
          <label className={cn(styles.label)}>Enter Your Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            id="password"
            placeholder="Enter Email"
            className={cn(styles.input, {
              "border-red-500": errors.name && touched.name,
            })}
          />
        </div>
        {errors.name && touched.name && (
          <span className="text-red-500 pt-2 block">{errors.name}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label className={cn(styles.label)}>Enter Your Password</label>
          <input
            type={`${show ? "password" : "text"}`}
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
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
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
          Already Have An Account
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => props.setRoute("Login")}
          >
            Login
          </span>
        </h5>
      </form>
      <br />
    </div>
  );
};

export default SignUp;
