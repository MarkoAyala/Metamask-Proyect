import logo from './logo.svg';
import './App.css';
import WalletCard from './WalletCard.js'
import Table from './components/Table/Table';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import { useEffect , useState } from 'react';
import { Grid, TextField } from '@mui/material';


function App() {

  let [coins , setCoins] = useState([]);
  let [search, setSearch] = useState("");


  const getData = async ()=>{
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    setCoins(res.data);
    console.log(coins)
  }
  useEffect(()=>{
    getData()
  } ,[])
  return (
    <div className="App">
      <Navbar/>
      <WalletCard/>
      <Grid container sx={{display:"flex", justifyContent:"center", height:"90px", alignItems:"center"}}>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{display:"flex", justifyContent:"center"}}>
            <div style={{position:"relative",width:"253.31px", height:"53px"}}>
            <h6 className='border' style={{fontSize:"40px", position:"absolute", top:0,left:0,right:0,bottom:0,margin:"auto"}}>CryptoSearch</h6>
            <h6 className="wave" style={{fontSize:"40px", position:"absolute", top:0,left:0,right:0,bottom:0,margin:"auto"}}>CryptoSearch</h6>
            </div>
          </Grid>
      </Grid>
      <Grid container maxWidth={"100%"} spacing={2} sx={{display:"flex", justifyContent:"center", margin:"10px 0px 20px 0px"}}>
      <Grid item maxWidth="md" xs={11} sm={6} md={6} lg={4} xl={4} sx={{padding:"0px !important"}}>
        <TextField fullWidth label="Search a Coin" id="fullWidth" onChange={(e)=>setSearch(e.target.value)}/>
      </Grid>
      </Grid>
      <Table coins={coins} search={search}/>
    </div>
  );
}

export default App;
