import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CakeView from './features/cake/CakeView.jsx'
import IceCreamView from './features/icecream/IceCreamView.jsx'
import UserView from './features/users/UserView.jsx'
import './App.css'

function App() {
  return (
    <div>
      <CakeView />
      <IceCreamView />
      <UserView />
     
    </div>
  )
}

export default App
