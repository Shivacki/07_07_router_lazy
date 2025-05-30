import { Link } from 'react-router-dom'

import { ROUTER_PATHS } from '@routerPaths'
import { FETCH_PATHS } from '@fetchPaths'
import { CharactersDto } from '@dto/characterDto'
import CategoryFetcher from '@components/fetch/CategoryFetcher'


const renderData = (data: CharactersDto) => {
  return  (
    <>
      <ul>
        {data?.map(value => (<li key={value.id}><Link to={ROUTER_PATHS.characters + `/${value.id}`} state={value}>{value.name}</Link></li>))}
      </ul>
    </>
  )
}


const Characters = () => {
  return (
    <CategoryFetcher<CharactersDto>
      fetchPath = {FETCH_PATHS.characters}
      renderData = {renderData}
    />
  )
}

export default Characters;
