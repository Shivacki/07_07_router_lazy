import { createContext, useContext, useState, PropsWithChildren } from 'react'


type UserName = string | null;
type AfterSigninCallback = () => void;
type AfterSignoutCallback = () => void;

export interface AuthUser {
  userName: UserName;
  signin: (newUserName: string, afterSigninCallback: AfterSigninCallback) => void;
  signout: (afterSignoutCallback: AfterSignoutCallback) => void;
}


const AuthContext = createContext<AuthUser | null>(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
}


const AuthContextProvider = ({ children }: PropsWithChildren) => {

  // Текущий залогиненный юзер
  const [userName, setUserName] = useState<UserName>(null);

  const signin = (newUserName: string, afterSigninCallback: AfterSigninCallback) => {
    setUserName(newUserName);
    afterSigninCallback();
  }

  const signout = (afterSignoutCallback: AfterSignoutCallback) => {
    setUserName(null);
    afterSignoutCallback();
  }

  const value: AuthUser = {
    userName,
    signin,
    signout,
  }


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContextProvider
