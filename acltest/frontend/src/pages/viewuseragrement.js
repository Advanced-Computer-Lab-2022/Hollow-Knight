import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
const userAgreement  = () => {
    //userAgreement for payment and refund policy
   
  return (
    <div className="userAgreement">
        <h1>Payment and Refund Policy</h1>
        <p>Payment for the course is due at the time of registration. If you are paying by check, please make it payable to “The University of Texas at Austin” and mail it to:</p>
        <p>UT Austin Continuing Education</p>
        <p>PO Box 8029</p>
        <p>Austin, TX 78713-8029</p>


        <p>Refunds will be issued for cancellations received in writing at least 10 business days prior to the start of the course. A $25 processing fee will be deducted from all refunds. No refunds will be issued for cancellations received less than 10 business days prior to the start of the course. If you are unable to attend a course, you may send a substitute in your place. If you have any questions, please contact us at 512-471-3515 or email us at
        <a href="mailto:mostaf7583@gmail.com">mostaf7583</a>
        </p>
        {/* if accept redirct to change password page  */}
    </div>


  );
};
export default userAgreement;
