import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const ItemLayout = () => {

  return (
    <div>
      <h3>Описание элемента:</h3>
      <Suspense fallback={<>Загрузка кода...</>}>
        <Outlet/>
      </Suspense>
    </div>
  )
}

export default ItemLayout
