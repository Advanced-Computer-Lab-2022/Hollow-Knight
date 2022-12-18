import { useState } from "react";

const CreditCardInfo = () => {
  const [creditNumber, setNumber] = useState("");
  const [expDate, setDate] = useState("");
  const [securityCode, setCode] = useState("");
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const userId = params.get("userId");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { creditNumber, expDate, securityCode, courseId, userId };
    console.log(courseId);
    const response = await fetch(`/api/trainees/addcoursetotrainee`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      setNumber("");
      setDate("");
      setCode("");
    }
  };
  return (
    <form>
      <label>Credit Card Number</label>
      <input value={creditNumber} onChange={(e) => setNumber(e.target.value)} />
      <label>Security Code</label>
      <input value={securityCode} onChange={(e) => setCode(e.target.value)} />
      <label>Expiration Date</label>
      <input value={expDate} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleSubmit}>Pay For Course</button>
    </form>
  );
};

export default CreditCardInfo;
