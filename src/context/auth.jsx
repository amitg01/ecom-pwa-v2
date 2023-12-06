import { useState, useContext, createContext } from "react";

const authContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState();

  const signin = (userData) => {
    setUser(userData);
  };

  const signout = () => {
    setUser(null);
  };

  return {
    user,
    signin,
    signout,
  };
}
