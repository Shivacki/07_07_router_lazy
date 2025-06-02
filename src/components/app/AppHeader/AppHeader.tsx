import { NavLink, NavLinkRenderProps } from 'react-router-dom'

import { ROUTER_PATHS } from '@routerPaths'
import { useAuthContext } from '@src/context/AuthContextProvider';


// Отображение активного маршрута в меню приложения с пом. соотв. css-класса
const getNavLinkClassName = ({ isActive }: NavLinkRenderProps) => {
  if (isActive)
    return 'activeLink'
  else
    return '';
}


// Заголовок приложения с главным меню
const AppHeader = () => {

  return (
    <>
      <ul>
        <li><NavLink to={ROUTER_PATHS.home} className={getNavLinkClassName}>Главная</NavLink></li>
        <li><NavLink to={ROUTER_PATHS.about} className={getNavLinkClassName}>О нас</NavLink></li>
        <li><NavLinkAuth/></li>
      </ul>
      <ul>
        <li><NavLink to={ROUTER_PATHS.characters} className={getNavLinkClassName}>Персонажи</NavLink></li>
        <li><NavLink to={ROUTER_PATHS.locations} className={getNavLinkClassName}>Локации</NavLink></li>
        <li><NavLink to={ROUTER_PATHS.episodes} className={getNavLinkClassName}>Эпизоды</NavLink></li>
      </ul>
    </>
  )
}

export default AppHeader


// Эл-т гл. меню с для login/logout юзера
const NavLinkAuth = () => {

  const authContext = useAuthContext();
  
  if (!authContext?.userName) {
    return (
      <NavLink to={ROUTER_PATHS.login} className={getNavLinkClassName}>Войти</NavLink>
    )
  }
  
  return (
    <NavLink to={ROUTER_PATHS.logout} className={getNavLinkClassName}>Выйти {`(${authContext?.userName})`}</NavLink>
  )
}

