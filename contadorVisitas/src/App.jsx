import { useState } from 'react'
import { CounterProvider } from './context/counterProvider';
import RedesSociales from './components/RedesSociales';
import { Header } from './components/Header';


function App () {
 // const [count, setCount] = useState(0)
  return (
    <CounterProvider>
         <RedesSociales/>
           <Header/>
    </CounterProvider>
  )
}

export default App
