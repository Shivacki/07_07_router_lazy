import { Outlet } from 'react-router-dom'

const CategoryLayout = () => {

  return (
    <div>
      <h3>Список элементов в выбранной категории:</h3>
      <Outlet/>
    </div>
  )
}

export default CategoryLayout
