
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoreContextProvider from "./Storecontext.jsx";
import { BrowserRouter } from 'react-router-dom'; 



createRoot(document.getElementById('root')).render(

  <StoreContextProvider>
    <BrowserRouter basename="/Foodorderapp">
    <App/>
    </BrowserRouter>
  </StoreContextProvider>
)
