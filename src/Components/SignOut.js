import React from 'react'
import { auth } from '../firebase'
const SignOut = () => {
    return (
        <div>
            <button onClick={()=>auth.signOut()}>sign out</button>
        </div>
    )
}

export default SignOut
