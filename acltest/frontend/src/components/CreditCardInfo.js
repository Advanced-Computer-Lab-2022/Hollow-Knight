import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useAuthContext } from "../hooks/useAuthContext";
const CreditCardInfo = () => {
  const [price, setPrice] = useState(0);
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const { user } =  useAuthContext();
  useEffect(() => {
    if(user){
    const fetchfromstripe= async() =>{
    fetch(`/api/courses/coursedetails/` + courseId,{
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${user.token}`
      },
    }).then(async (r) => {
      const courses = await r.json();
      setPrice(courses.price); 
    });
    fetch("/api/trainees/config",{
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${user.token}`
      },
    }).then(async (s) => {
      const { publishableKey } = await s.json();
      setStripePromise(loadStripe(publishableKey));
      console.log(publishableKey)
      });

  
    fetch(`/api/trainees/create-payment-intent`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`
        },
    
    }).then(async (t) => {
      var { clientSecret } = await t.json();
      setClientSecret(clientSecret);
      console.log(clientSecret) 

    }); 

  } 
  fetchfromstripe();
}
},[user])

 


 


  return (
    <>
      <h>Price: {price}</h>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default CreditCardInfo;
