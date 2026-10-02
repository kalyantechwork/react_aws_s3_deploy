import React from 'react'
import Cricket from './components/Cricket'
import Football from './components/Football'
import StatesTopic from './components/StatesTopic'
import Login from './components/Login'
import FormHandling from './components/FormHandling'
import API_Calling from './components/API_Calling'
import { Routes, Route } from 'react-router-dom'
import SingleComponent from './components/SingleComponent'
import EmpDetails from './components/EmpDetails'
import SampleFunction from './components/SampleFunction'
import AddProduct from './components/AddProduct'

// props means passing data from one comp to anther comp (only parent to child (read only))
const App = () => {
    const subject = "this is special subject"
    const products = "laptops"
    const marks = 99

  return (
    <div>
        {/* <Cricket potato={subject} abcd={products}/>
        <Football marks={marks}/>
        <StatesTopic />
        <Login /> */}
        {/* <FormHandling /> */}
       
        <Routes>
          <Route path='/add-product' element={<AddProduct />} />
          <Route path="/api" element={ <API_Calling />}/>
          <Route path="/single/:id" element={ <SingleComponent/>}/>
          <Route path='employee' element={<EmpDetails />} />
          <Route path='/function' element={<SampleFunction />} />
        </Routes>
    </div>
  )
}

export default App