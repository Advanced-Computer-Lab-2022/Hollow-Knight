import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const signup = async (
    email,
    password,
    first_name,
    last_name,
    country,
    countryAbb,
    gender,
    type,
  ) => {
    setLoading(true);
    setError(null);
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        first_name,
        last_name,
        country,
        countryAbb,
        gender,
        type,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //1.update the context with the new user 2. update the loading state 3. update login state the user is logged in
      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(json)); //store the token
      dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
    }
  };
  return { signup, error, loading };
};
