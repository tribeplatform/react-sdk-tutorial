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
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBnSHFHMTlyaWIiLCJuZXR3b3JrSWQiOiJKQ0dvbTRDWjNLIiwibmV0d29ya0RvbWFpbiI6InJlYWN0LXNkay10dXRvcmlhbC50cmliZXBsYXRmb3JtLmNvbSIsInRva2VuVHlwZSI6IlVTRVIiLCJlbnRpdHlJZCI6bnVsbCwicGVybWlzc2lvbkNvbnRleHQiOm51bGwsInBlcm1pc3Npb25zIjpudWxsLCJzZXNzaW9uSWQiOiJ3M1ZxVE1MNjhsa0ZlYjJtQkdHbGN4eUk0RnVXOGV5Q3pNenozV2RBbTZCSXpQOERuZCIsImlhdCI6MTY0MjYxNDc2NiwiZXhwIjoxNjQ1MjA2NzY2fQ.Psdg6IqpcJl9Wx2XdqJi3SB8zRU2v6SvBCkFo4d0AMQ',
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
