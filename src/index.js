import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import 'antd/dist/antd.css';
import DappContextProvider from './providers/ContextProvider';
// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
  // const isServerInfo = APP_ID && SERVER_URL ? true : false;
  const isServerInfo = true;
  if (isServerInfo)
    return (
      <MoralisProvider appId={"xljc98ZWTRyuHTScwGQly8y7mND3BJJ66x3nUB9S"} serverUrl={"https://dplvu4ezxcyi.usemoralis.com:2053/server"}>
        <DappContextProvider>
          <App isServerInfo />
        </DappContextProvider>
      </MoralisProvider>
    );
  else {
    return (
      < >
        <App />
      </>
    );
  }
};


ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
