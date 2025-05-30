import { useLocation } from 'react-router-dom'

import { CharacterDto } from '@dto/characterDto'
import CharacterDetail from '@components/detail/CharacterDetail'


const Character = () => {

  const location = useLocation();


  return  (
    <CharacterDetail character={location.state as CharacterDto}/>
  )
}

export default Character;
