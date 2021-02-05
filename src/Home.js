import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {AppContext, useGlobalContext} from './context'

const Home = () => {
  // const data = useContext(AppContext) this is the way without the custom hook
  const {openSiderbar,openModal} = useGlobalContext()
 
 
  return <main>
  <button className="sidebar-toggle" onClick={openSiderbar}>
  <FaBars/>
  </button>
  <button onClick={openModal} className="btn">Show Modal</button>
  </main>
}

export default Home
