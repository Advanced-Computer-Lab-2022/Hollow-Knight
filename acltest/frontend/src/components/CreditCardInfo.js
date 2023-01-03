import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
const CreditCardInfo = () => {
  const [price, setPrice] = useState("");
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const userId = params.get("userId");
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  useEffect(() => {
    fetch("/api/trainees/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  useEffect(() => {
    fetch("/api/trainees/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      var { clientSecret } = await r.json();
      setClientSecret(clientSecret);
    });
  }, []);
  useEffect(() => {
    fetch(`/api/courses/coursedetails/` + courseId).then(async (r) => {
      const courses = await r.json();
      setPrice(courses.price);
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
