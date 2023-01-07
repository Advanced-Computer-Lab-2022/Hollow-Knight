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
  const { user } = useAuthContext();
 
  useEffect(() => {
    fetch(`/api/courses/coursedetails/` + courseId).then(async (r) => {
      const courses = await r.json();
      setPrice(courses.price); 
    });

  }, []);

  useEffect(() => {
    fetch("/api/trainees/config",{
    }).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
      });
  }, []);
  useEffect(() => {
    fetch(`/api/trainees/create-payment-intent`, {
      method: "POST",
      body: JSON.stringify({})}).then(async (r) => {
      var { clientSecret } = await r.json();
      setClientSecret(clientSecret);
      console.log(clientSecret) 

    }); 
  }, []);
 


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
