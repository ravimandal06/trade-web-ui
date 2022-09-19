import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Header from './components/Header'
import What from './components/What'
import './App.css';
import Features from './components/Features'
import Possibility from './components/Possibility'
import Footer from './components/Footer'
import CTA from './components/CTA'
function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  },)


  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Form />

        <Header />
        <Routes>
          <Route path='/' element={<Coins coins={coins} />} />

          <Route path='/coin' element={<Coin />}>

            <Route path=':coinId' element={<Coin />} />
          </Route>
        </Routes>
        <What />
        <Features />
        <Possibility />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
