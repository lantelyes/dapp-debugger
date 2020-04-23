import React, {Component} from 'react';
import logo from './eth-logo.svg';
import './App.css';
import Web3 from 'web3';

class App extends Component {

  state={web3Version: null}

  componentDidMount() {

  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Web3 Library Version: {Web3.version}
        </p>
        <p>
          Injected Web3 API: {window.web3.version.api}
        </p>
      </header>
    </div>
  );
}
}
export default App;
