import logo from './logo.svg';
import './App.css';
import WalletCard from './WalletCard.js'
import Table from './components/Table/Table';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import { useEffect , useState } from 'react';


function App() {

  let [coins , setCoins] = useState([]);


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
      <h1 style={{textAlign:"center"}}>Coin Market</h1>
      <Table coins={coins}/>
    </div>
  );
}

export default App;
