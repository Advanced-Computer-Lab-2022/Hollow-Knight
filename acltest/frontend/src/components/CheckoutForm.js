import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button, Card, CardContent } from "@mui/material";
export default function CheckoutForm() {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const stripe = useStripe();
  const elements = useElements();
  const[price,setPrice] = useState(0);
  const { user } = useAuthContext();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
      redirect: "if_required",
    });
    if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Payment " + paymentIntent.status);
      setIsProcessing(false);
      console.log(user)
      const response = await fetch(`/api/trainees/addcoursetotrainee`, {
        method: "POST",
        body: JSON.stringify({courseId}),
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${user.token}`
        },
      });
      console.log(response)
    }

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <Card>
    <CardContent>
    <form id="payment-form">
      <PaymentElement id="payment-element" />
      <br></br>
      <Button onClick={handleSubmit} variant="contained" disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </Button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
    </CardContent>
    </Card>
  );
}
