
import './App.css'
import Hero from './component/hero/Hero'
import Main from './component/mainPart/Main'
import Navbar from './component/navbar/Navbar'

function App() {
  
  return (
    <div className='container mx-auto'>
     <Navbar></Navbar>
     {/* <Hero></Hero> */}
     <Main></Main>
    </div>
  )
}

export default App
