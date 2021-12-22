import firebase from "firebase";



const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBuAhQM7VkUW3O54ed2ItwZEJYG9ThAQXE",
    authDomain: "chat-app-9d0a7.firebaseapp.com",
    projectId: "chat-app-9d0a7",
    storageBucket: "chat-app-9d0a7.appspot.com",
    messagingSenderId: "1044702822932",
    appId: "1:1044702822932:web:a7e6c803bbd0f53bfa9d01",
    measurementId: "G-7RJQ0XJG7N"
})
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db ,auth}