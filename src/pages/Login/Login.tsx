import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import Signin, { SigninInfoModel } from '@components/auth/Signin'
import { useAuthContext } from '@src/context/AuthContextProvider';
import { ROUTER_PATHS } from '@routerPaths'


const Login = () => {

  const navigate = useNavigate();
  const authContext = useAuthContext();

  const handleSigninSubmit = async (data: SigninInfoModel) => {
    console.log('authContext: ', authContext);
    
    authContext?.signin(data.email, 
      () => {
        console.log('signin success, user: ', authContext.userName);
        navigate(ROUTER_PATHS.home);
        setTimeout(() => console.log('user: ', authContext.userName), 100);
      }
    );
    
  }

  /*
  useEffect(() => {
    console.log('Login useEffect');
    
    if (!!authContext?.userName) {
      console.log('already logged ', authContext?.userName);
      navigate(ROUTER_PATHS.home);
    }
  });


  if (!!authContext?.userName)
    return <></>
  */

  return (
    <Signin onSubmit = {handleSigninSubmit}/>
  )
}

export default Login;