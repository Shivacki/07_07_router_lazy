import { Ref } from 'react'
import { Link } from 'react-router-dom'

import { ROUTER_PATHS } from '@routerPaths'
import { FETCH_PATHS } from '@fetchPaths'
import { EpisodesDto } from '@dto/episodeDto'
import CategoryFetcher, { getLastRef } from '@components/fetch/CategoryFetcher'


const renderData = (data: EpisodesDto, lastNodeRef: Ref<any>) => {
  return  (
    <>
      <ul>
        {data?.map((value, index) => (
          <li key={value.id} ref={getLastRef(data?.length, index, lastNodeRef)}>
            <Link to={ROUTER_PATHS.episodes + `/${value.id}`} state={value}>{value.name}</Link>
          </li>
        ))}
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
