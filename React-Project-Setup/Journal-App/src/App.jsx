import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Entries from './Components/Entries/Entries'

function App() {
  return (
    <>
    <Header />
    <Main />
    <Entries />
    <Footer />
    </>
  )
  
}
export default App
