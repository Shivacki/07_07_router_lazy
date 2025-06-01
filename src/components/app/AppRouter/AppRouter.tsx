import { Routes, Route } from 'react-router-dom'

import { ROUTER_PATHS } from '@routerPaths'
import About from '@pages/About'
import Home from '@pages/Home'
import NotFound from '@pages/NotFound'
import CategoryLayout from '@layouts/CategoryLayout'
import ItemLayout from '@layouts/ItemLayout'
import Characters from '@pages/Characters'
import Character from '@pages/Character'
import Locations from '@pages/Locations'
import Location from '@pages/Location'
import Episodes from '@pages/Episodes'
import Episode from '@pages/Episode'


// Маршруты приложения
const AppRouter = () => {

  return (
    <Routes>
      <Route path={ROUTER_PATHS.home} element={<Home/>}/>
      <Route path={ROUTER_PATHS.about} element={<About/>}/>

      <Route element={<CategoryLayout/>}> 
        <Route path={ROUTER_PATHS.characters} element={<Characters/>}/>
        <Route path={ROUTER_PATHS.locations} element={<Locations/>}/>
        <Route path={ROUTER_PATHS.episodes} element={<Episodes/>}/>
      </Route>

      <Route element={<ItemLayout/>}> 
        <Route path={ROUTER_PATHS.characters + '/:id'} element={<Character/>}/>
        <Route path={ROUTER_PATHS.locations + '/:id'} element={<Location/>}/>
        <Route path={ROUTER_PATHS.episodes + '/:id'} element={<Episode/>}/>
      </Route>
      
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRouter
