import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.jsx'
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    
    <Provider store={store}>
        <BrowserRouter future={{ v7_startTransition: true }}>
            <App />
            </BrowserRouter>
    </Provider>
    
    
    

)
