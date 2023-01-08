import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useAuthContext } from "../hooks/useAuthContext";
const Wallet = () => {
  const [wallet, setWallet] = useState(null);
  const { user } = useAuthContext();
  useEffect(() => {
    const getwallet = async () => {
      const params = new URLSearchParams(window.location.search);
      const userId = params.get("userId");
      console.log(userId);
      const response = await fetch(`/api/trainees/getwallet?userId=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const trainee = await response.json();
      setWallet(trainee.wallet);
    };

    getwallet();
  },[user]);

  return (
    <div className="wallet">
      <Card sx={{ height: 580, marginTop: 6 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            marginTop: 10,
          }}
        >
          <p>Personal Wallet</p>
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            marginTop: 20,
          }}
        >
          <p> Available Credit : {wallet}</p>
        </Typography>
      </Card>
    </div>
  );
};

export default Wallet;
