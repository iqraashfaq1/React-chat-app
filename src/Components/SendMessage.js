import React ,{useState} from 'react'
import {db ,auth} from "../firebase"
import firebase from 'firebase'
const SendMessage = () => {
    const [msg, setMsg] = useState("")

    async function sendMessage (e) {
        e.preventDefault ()
        const {uid , photoURL} =auth.currentUser
        await db.collection("messages").add ({
            text: msg,
            photoURL,
            uid,
             createdAt : firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg("")
        
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
             
                <input value={msg} placeholder='message...' onChange={e => setMsg (e.target.value)}/>
          <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default SendMessage
