
import { useState } from 'react'
import './App.css'
import Hero from './component/hero/Hero'
import Main from './component/mainPart/Main'
import Navbar from './component/navbar/Navbar'

function App() {
  const [coin, setCoin] = useState(5000000)
  // console.log(coin)
  return (
    <div className='container mx-auto'>
     <Navbar coin={coin} ></Navbar>
     <Hero></Hero>
     <Main coin={coin} setCoin={setCoin}></Main>
    </div>
  )
}

export default App

/**
 * coin and set coint 2 takei send korbo
 * card e click korle setcoin - price . 
*/
