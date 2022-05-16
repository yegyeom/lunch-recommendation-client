import { createContext, useState } from "react";

const initialAuthContext = {
  user: null,
  isLogin: false,
  setUser: () => {},
  setIsLogin: () => {},
};

export const AuthContext = createContext(initialAuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
