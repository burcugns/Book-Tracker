import { useFormik } from "formik";
import { registerFormSchema } from "../schemas/RegisterFormSchema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function RegisterForm() {
  const [errorm, setErrorm] = useState("");

  async function signup(email: string, pass: string): Promise<string> {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/signup`, {
        email: email,
        password: pass,
      });
      return String(response.data);
    } catch (error) {
      console.error(error);
      throw new Error("Login failed");
    }
  }

  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerFormSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      signup(values.email, values.password).then((result) => {
        if (result === "user already exist") {
          setErrorm("User already exist. Go to the login page");
        } else {
          setErrorm("");
          navigate("/readings");
        }
      });
    },
  });

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg ring-1 ring-neutral-200">
      <h2 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
        Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            value={values.email}
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-4 focus:ring-emerald-300/50"
          />
          {touched.email && errors.email && (
            <div className="text-red-500 text-sm mt-1">{errors.email}</div>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-4 focus:ring-emerald-300/50"
          />
          {touched.password && errors.password && (
            <div className="text-red-500 text-sm mt-1">{errors.password}</div>
          )}
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={values.confirmPassword}
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-4 focus:ring-emerald-300/50"
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <div className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </div>
          )}
        </div>
        {errorm && (
          <div className="text-red-500 text-sm mb-2 text-center">{errorm}</div>
        )}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-medium rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm text-center text-neutral-600 mt-6">
        Already have an account?{" "}
        <Link to="/" className="text-emerald-700 font-medium hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;
