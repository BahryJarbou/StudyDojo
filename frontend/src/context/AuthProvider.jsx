import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../server.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    if (token) {
      axios
        .get(`${hostURL}/auth/profile`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch(console.error)
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async ({ email, password }) => {
    const {
      data: { user, token },
    } = await axios.post(`${hostURL}/auth/signin`, {
      email,
      password,
    });
    setUser(user);
    localStorage.setItem("token", token);
    navigate("/");
  };

  const signup = async ({ email, password }) => {
    console.log({ email, password });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext value={{ login, logout, signup, loading, user }}>
      {children}
    </AuthContext>
  );
};

export { AuthContext, AuthProvider };
