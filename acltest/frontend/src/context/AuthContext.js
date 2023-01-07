//every componet that needs to access the context will import this file

import {createContext,useReducer,useEffect} from 'react';

export const AuthContext = createContext(); 

export const authReducer = (state,action) => { //state is the current state and action is the action that we want to perform
    switch(action.type){
        case 'LOGIN':
            return {
                user:action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        default:
            return   state  //return the current state if no action is performed    
}
}
export const AuthContextProvider = ({children}) =>{ //children is the app component //wrap our entire app and provide a value from context
    const [state,dispatch] = useReducer(authReducer,{
        user:null
    })
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))
        if(user){
            dispatch({type:"LOGIN",payload:user})
        }
    },[])
    console.log('AuthContext:',state)
    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>)
}