import { NavLink, NavLinkRenderProps } from 'react-router-dom'

import { ROUTER_PATHS } from '@routerPaths'


// Заголовок приложения с главным меню
const AppHeader = () => {

    // Отображение активного маршрута в меню приложения с пом. соотв. css-класса
    const getNavLinkClassName = ({ isActive }: NavLinkRenderProps) => {
      if (isActive)
        return 'activeLink'
      else
        return '';
    }
  
    return (
      <>
        <ul>
          <li><NavLink to={ROUTER_PATHS.home} className={getNavLinkClassName}>Главная</NavLink></li>
          <li><NavLink to={ROUTER_PATHS.about} className={getNavLinkClassName}>О нас</NavLink></li>
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
