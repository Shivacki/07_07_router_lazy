import { Link } from 'react-router-dom'


import { ROUTER_PATHS } from '@routerPaths'
import { FETCH_PATHS } from '@fetchPaths'
import { LocationsDto } from '@dto/locationDto'
import CategoryFetcher from '@components/fetch/CategoryFetcher'


const renderData = (data: LocationsDto) => {
  return  (
    <>
      <ul>
        {data?.map(value => (<li key={value.id}><Link to={ROUTER_PATHS.locations + `/${value.id}`} state={value}>{value.name}</Link></li>))}
      </ul>
    </>
  )
}


const Locations = () => {
  return (
    <CategoryFetcher<LocationsDto>
      fetchPath = {FETCH_PATHS.locations}
      renderData = {renderData}
    />
  )
}

export default Locations;
