import { useState } from "react";

const CreditCardInfo = () => {
  const [creditNumber, setNumber] = useState("");
  const [expDate, setDate] = useState("");
  const [securityCode, setCode] = useState("");

  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <label>Credit Card Number</label>
      <input value={creditNumber} onChange={(e) => setNumber(e.target.value)} />
      <label>Security Code</label>
      <input value={securityCode} onChange={(e) => setCode(e.target.value)} />
      <label>Expiration Date</label>
      <input value={expDate} onChange={(e) => setDate(e.target.value)} />
      <button>Pay For Course</button>
    </form>
  );
};

export default CreditCardInfo;
