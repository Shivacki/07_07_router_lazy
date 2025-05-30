import { Outlet } from 'react-router-dom'

const ItemLayout = () => {

  return (
    <div>
      <h3>Описание элемента:</h3>
      <Outlet/>
    </div>
  )
}

export default ItemLayout
