import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '@src/context/AuthContextProvider';
import { ROUTER_PATHS } from '@routerPaths'


const Logout = () => {

  const authContext = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // if (!!authContext?.userName)
    authContext?.signout(() => navigate(ROUTER_PATHS.home));
  }, []);


  return (
    <></>
  )
}

export default Logout;