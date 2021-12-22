
import SignOut from './SignOut'
import { db, auth } from '../firebase'
import { useState,useEffect ,useRef } from 'react'
import SendMessage from './SendMessage'

const Chat = () => {
    
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
        console.log(messages)
    
    }, [])
    return (
        <div>
            <SignOut/>
            {messages.map (({id,text,photoURL,uid})=>(
                <div>
                <div key={id} className={`msg ${uid === auth.currentUser.uid? "sent" : "received" }`}>
                    <img src = {photoURL} alt='' />
                    <p>{text}</p>
                     </div>
                     </div>
            ) )}
        <SendMessage/>
        <div ></div>
        </div>
    )
}

export default Chat
