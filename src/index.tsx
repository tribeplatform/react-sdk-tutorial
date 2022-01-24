import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider as TribeProvider} from '@tribeplatform/react-sdk'

ReactDOM.render(
    <React.StrictMode>
        <TribeProvider config={{
            baseUrl: 'https://app.tribe.so/graphql',
            networkDomain: 'react-sdk-tutorial.tribeplatform.com',
            accessToken: localStorage.getItem('apiKey')
        }}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </TribeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
