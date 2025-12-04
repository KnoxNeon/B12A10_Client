import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config"

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const registerWithEmailPassword = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const handleGoogleSignin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        
            setUser(currentUser)
            setLoading(false)
        
      })
        return ()=>{
            unsubscribe()
        }
    }, [])
    

  const authData = { registerWithEmailPassword, user, setUser, handleGoogleSignin, loading }
  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}

export default AuthProvider
