import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ethers } from 'ethers'
import { sequence } from '0xsequence'


// Init all the good stuff
let gIsEthPresent = false;
const ethereum = (window as any).ethereum; 
const [walletConnected, setWalletConnected] = useState(false)
let provider = undefined;

// Check if ya boi is installed
if (typeof ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
  gIsEthPresent = true;
  provider = new ethers.providers.Web3Provider(ethereum)
}
else{
  console.log('No wallet seem to be installed :/');
}

async function connectSequenceWallet(){
  const wallet = new sequence.Wallet('ethereum');
  const connectDetails = await wallet.connect();
  console.log('=> connected?', connectDetails.connected);
  const walletAddress = await wallet.getAddress();
  console.log(walletAddress);
  wallet.openWallet();
}

function connectMetamaskWallet(){
  if(gIsEthPresent){
    ethereum.request({ method: 'eth_requestAccounts' }).then()
  } 
}

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello loot community</p>
        <p>
          <button type="button" onClick={ () => connectMetamaskWallet() }>
            Connect your wallet
          </button>
        </p>
        <p>
          Follow the socials for updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://twitter.com/FlootFamiliars"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://opensea.io/collection/loot-familiars"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenSea
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
