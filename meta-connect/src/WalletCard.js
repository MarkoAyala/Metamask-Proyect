import React, { useState } from "react";
import { ethers } from "ethers";
import { Box, Grid } from "@mui/material";
import Metamask from "./Assets/Metamask.png";
import BackgroundMeta from "./Assets/BackgroundMeta.png";
import Tilt from "react-parallax-tilt";
import css from "./WalletCard.module.css";
import TableMeta from "./components/TableMeta/TableMeta";

function WalletCard() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Conectarse");

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Estas conectado!");
          getAccountBalance(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  window.ethereum.on("accountsChanged", accountChangedHandler); // Actualiza los datos al cambiar la cuenta

  window.ethereum.on("chainChanged", chainChangedHandler); // Recargo la pagina al cambiar de cuenta

  return (
    <Grid
      container
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Grid
        maxWidth={"xl"}
        container
        spacing={2}
        sx={{
          display: "flex",
          margin: { xs: "6% 0 0 0", md: "3% 0 0 0" },
        }}
      >
        <Grid item md={5} sx={{ display: "flex", justifyContent: "center" }}>
          <Tilt style={{ width: "60%" }}>
            <img
              src={Metamask}
              alt="noimagen"
              style={{
                width: "100%",
                background: `center/123% url(${BackgroundMeta})`,
              }}
            />
          </Tilt>
        </Grid>
        <Grid item md={7} sx={{ border: "1px solid blue", padding:"0px 0px 0px 0px !important", }}>
          <Box width="100%">
            <div className={css.titulo}>METAMASK</div>
          </Box>
{/* 
          <h4> {"Conexión a Metamask."} </h4>
          <button onClick={connectWalletHandler}>{connButtonText}</button>
          <div className="accountDisplay">
            <h3>ID User: {defaultAccount}</h3>
          </div>
          <div className="balanceDisplay">
            <h3>Saldo: {userBalance}</h3>
          </div> */}
		  <TableMeta/>
          {errorMessage}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WalletCard;
