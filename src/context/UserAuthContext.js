import React,{ createContext, useContext,useState,useEffect} from "react";
import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut} from "firebase/auth";
import {auth} from "../firebase";

const userAuthContext=createContext();

export function useUserAuth(){
    return useContext(userAuthContext);
}


export function UserAuthContextProvider({children}){
 const [user, setUser] = useState("");
 useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (currentuser)=>{
        setUser(currentuser);
    })
    return ()=>{
        unsubscribe();
    }
 }, []);

 function sigenUp(email,password){
     return createUserWithEmailAndPassword(auth,email, password);
 }

 function logIn(email,password){
    return signInWithEmailAndPassword(auth,email, password);
}
    return <userAuthContext.Provider value={{user,sigenUp,logIn}}>{children}</userAuthContext.Provider>
};





