import { Fragment, useState } from 'react'
import Header from './components/header/header'
import Leftbar from './components/LeftBar/LeftBar'
import UsersPanel from './components/UsersPanel/UsersPanel'
import ProductsPanel from './components/ProductsPanel/ProductsPanel'


import './App.css'
import Footer from './components/footer/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Fragment>
    <Header/>
    <BrowserRouter>
        <Leftbar/>
      <Routes>
        <Route path='/' element={<UsersPanel />} />
        <Route path="/UsersPanel" element={<UsersPanel />} />
        <Route path="/ProductsPanel" element={<ProductsPanel />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
   </Fragment>
  )
}

export default App
