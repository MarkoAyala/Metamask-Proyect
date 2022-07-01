import React, {useState} from 'react';
import {ethers} from 'ethers'

function WalletCard() {

    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Conectarse');

    const connectWalletHandler = () =>{
        if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
                setConnButtonText('Estas conectado!');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
    }


    const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}


    const getAccountBalance = (account) => {
        window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};


    const chainChangedHandler = () => {
		window.location.reload();
	}

    window.ethereum.on('accountsChanged', accountChangedHandler); // Actualiza los datos al cambiar la cuenta

    window.ethereum.on('chainChanged', chainChangedHandler); // Recargo la pagina al cambiar de cuenta

  return (
    <div>
        <div className='walletCard'>
		<h4> {"Conexión a Metamask."} </h4>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h3>ID User: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Saldo: {userBalance}</h3>
			</div>
			{errorMessage}
		</div>
    </div>
  )
}

export default WalletCard