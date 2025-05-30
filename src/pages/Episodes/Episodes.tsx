import { Link } from 'react-router-dom'

import { ROUTER_PATHS } from '@routerPaths'
import { FETCH_PATHS } from '@fetchPaths'
import { EpisodesDto } from '@dto/episodeDto'
import CategoryFetcher from '@components/fetch/CategoryFetcher'


const renderData = (data: EpisodesDto) => {
  return  (
    <>
      <ul>
        {data?.map(value => (<li key={value.id}><Link to={ROUTER_PATHS.episodes + `/${value.id}`} state={value}>{value.name}</Link></li>))}
      </ul>
    </>
  )
}


const Episodes = () => {
  return (
    <CategoryFetcher<EpisodesDto>
      fetchPath = {FETCH_PATHS.episodes}
      renderData = {renderData}
    />
  )
}

export default Episodes;
