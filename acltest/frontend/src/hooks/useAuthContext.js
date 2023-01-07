import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext); //useContext is a hook that allows us to access the context 
    if (!context) {
        throw new Error("useAuthContext must be used within AuthContextProvider");
    }

    return context;
    }

