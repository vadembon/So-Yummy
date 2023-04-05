import { useState, createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

const TOKEN_KEY = 'user_token';

export const AuthProvider = ({
  children,
}) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location?.state?.path || '/main';

  useEffect(() => {
    const token = getTokenFromStorage();

    if (token) {
      navigate(redirectPath, { replace: false });

      setToken(token)
    }
  }, []);

  const login = (userToken) => {
    setToken(userToken);

    setTokenToStorage(userToken);
  };

  const logout = () => {
    setToken(null);

    localStorage.removeItem(TOKEN_KEY);
  };

  const setTokenToStorage = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  };

  const getTokenFromStorage = () => {
    return localStorage.getItem(TOKEN_KEY);
  };

  return <AuthContext.Provider value={{
    token,
    login,
    logout,
  }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
