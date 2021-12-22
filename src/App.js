import React from 'react'
import Chat from './Components/Chat'
import SignIn from './Components/SignIn'
import { auth } from './firebase'
import {useAuthState} from "react-firebase-hooks/auth"

const App = () => {
  const [user] = useAuthState(auth)
  return (
    <div>
      {user ? <Chat/> : <SignIn/>}
   
    </div>
  )
}

export default App
