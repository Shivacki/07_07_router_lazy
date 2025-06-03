import { useEffect, useLayoutEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom'

import Signin, { SigninInfoModel } from '@components/auth/Signin'
import { useAuthContext } from '@src/context/AuthContextProvider';
import { ROUTER_PATHS } from '@routerPaths'


const Login = () => {

  const navigate = useNavigate();
  
  const authContext = useAuthContext();
  console.log('Login authContext: ', authContext);
  

  const handleSigninSubmit = async (data: SigninInfoModel) => {
    console.log('handleSigninSubmit authContext: ', authContext);
    
    authContext?.signin(data.email, 
      () => {
        navigate(ROUTER_PATHS.home, {replace: true});
      }
    );
    
  }

  /*
  useEffect(() => {
    console.log('Login useEffect');
    
    if (!!authContext?.userName) {
      console.log('already logged ', authContext?.userName);
      navigate(-1);
      // navigate(ROUTER_PATHS.home);
    }
  });
  */

  ///*
  // При попытке переключения на страницу Login при уже залогиненном юзере возвращаем обратно
  useEffect(() => {
    if (authContext?.isAuthorized()) {
      // console.log('Login navigate(-1)');
      navigate(-1);
    }
  }, []);
  //*/

  /*
  if (!!authContext?.userName) {
    console.log('Login navigate(-1)');
    // navigate(-1);
    return <Navigate to='-1' replace />
  }
  */

  return (
    <>
      {!authContext?.isAuthorized() && <Signin onSubmit = {handleSigninSubmit}/>}
    </>
  )
}

export default Login;