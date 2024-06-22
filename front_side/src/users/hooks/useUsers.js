import { useState, useCallback, useMemo } from "react";
import { logIn, signup } from "../services/usersApiService";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizedUser from "../../forms/models/normalization/normalizedUser";
import { useSnack } from "../../providers/SnackbarProvider";
import useAxios from "../../hooks/useAxios";

const useUsers = () => {
  const snack = useSnack();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, user = null) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser, setLoading, setError]
  );

  const handleLogin = useCallback( async (user) => {
      try {
        setLoading(true)
        const token = await logIn(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalStorage = getUser();
        navigate(ROUTES.ROOT);
        requestStatus(false, null, userFromLocalStorage);
        snack('success', 'Login successful');
        setLoading(false)

      } catch (error) {
        requestStatus(false, error, null);
        snack('error', 'Login failed');
        setLoading(false)

      }
    },
    [navigate, requestStatus, setToken]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
    navigate(ROUTES.ROOT)
  }, [setUser,navigate]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      try {
        setLoading(true)
        const userNorm = normalizedUser(userFromClient);
        await signup(userNorm);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
        snack('success', 'LogOut successful');
        setLoading(false)

      } catch (error) {
        requestStatus(false, error, null);
        snack('error', 'LogOut failed');
        setLoading(false)

      }
    },
    [requestStatus, handleLogin]
  );

  const value = useMemo(
    () => ({ isLoading, error, user }),
    [isLoading, error, user]
  );

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
  };
};

export default useUsers;