import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClientProvider, QueryClient, useQuery} from "react-query";


const queryCliente = new QueryClient(
    {
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
            }
        }
    }
)

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryCliente}>
          <App />
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
