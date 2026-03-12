import { login, register, logout, getMe } from "../services.js/auth.api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth.context";
export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setloading } = context;
  async function handleRegister({ email, password, username }) {
    setloading(true);
    const data = await register({ email, password, username });
    setUser(data.user);
    setloading(false);
  }
  async function handleLogin({ username, email, password }) {
    setloading(true);
    const data = await login({ username, email, password });
    setUser(data.user);
    setloading(false);
  }
  async function handleLogout() {
    setloading(true);
    const data = await logout();
    setUser(null);
    setloading(false);
  }
  async function handleGetMe() {
    setloading(true);
    const data = await getMe();
    setUser(data.user);
    setloading(false);
  }

  useEffect(() => {
    handleGetMe();
  }, []);
  return {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
    handleGetMe,
  };
};
