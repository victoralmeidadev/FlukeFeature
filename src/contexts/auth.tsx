import React, {
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
} from 'react';

const AuthContext = createContext({});

export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isSigned, setIsSigned] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isSigned,
        setIsSigned,
        userInfo,
        setUserInfo,
        loading,
        setLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

interface IAuthContext {
  isSigned: boolean;
  userInfo: object;
  setUserInfo: Function;
  loginType: string;
  setLoginType: Function;
  loading: boolean;
  setLoading: Function;
}

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  return context as IAuthContext;
};

export default AuthProvider;
