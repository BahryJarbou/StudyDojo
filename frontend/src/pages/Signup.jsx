import { useState, use } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { Navigate } from "react-router";

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { signup, user, loading } = use(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(form);
  };

  return !loading ? (
    !user ? (
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center p-8 rounded shadow-md j w-[95vw]"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[90%] lg:w-[70%] border p-4">
          <legend className="fieldset-legend lg:text-4xl text-success">
            Sign Up
          </legend>

          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input validator border-success w-full"
            type="email"
            required
            placeholder="mail@site.com"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="username"
          />

          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="input validator border-success w-full"
            required
            placeholder="Password"
            minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
          />

          <button className="btn btn-soft btn-success mt-4">Sign Up</button>
        </fieldset>
      </form>
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <span className="loading loading-spinner loading-xl"></span>
  );
};

export default Signup;
