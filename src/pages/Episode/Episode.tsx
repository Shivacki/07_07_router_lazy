import { useLocation } from 'react-router-dom'

import { EpisodeDto } from '@dto/episodeDto'
import EpisodeDetail from '@components/detail/episodeDetail'


const Episode = () => {

  const location = useLocation();


  return  (
    <EpisodeDetail episode={location.state as EpisodeDto}/>
  )
}

export default Episode;
