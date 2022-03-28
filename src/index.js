
import App from './Components/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom'
import Expenses from './Components/Expenses';
import Invoices from './Components/Invoices';
import "./index.css"






ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/expenses' element={<Expenses />} />
      <Route path='/invoices' element={<Invoices />} />
    </Routes>
  </BrowserRouter>,


  document.querySelector('#root')



)

