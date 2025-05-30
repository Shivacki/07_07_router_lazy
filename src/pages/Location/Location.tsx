import { useLocation } from 'react-router-dom'

import { LocationDto } from '@dto/locationDto'
import LocationDetail from '@components/detail/LocationDetail'


const Location = () => {

  const location = useLocation();


  return  (
    <LocationDetail location={location.state as LocationDto}/>
  )
}

export default Location;
