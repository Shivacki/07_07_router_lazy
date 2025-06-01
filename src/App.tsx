import './App.css'

import AppHeader from '@components/app/AppHeader'
import AppRouter from '@components/app/AppRouter'
import AuthContextProvider from './context/AuthContextProvider'


function App() {

  return (
    <>
      <AuthContextProvider>
        <AppHeader/>
        <AppRouter/>
      </AuthContextProvider>
    </>
  )
}

export default App
