import React, { useState, useContext } from 'react'



const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, SetIsModalOpen] = useState(false)


  const openSiderbar =()=>{
      setIsSidebarOpen(true)
  }
    const closeSiderbar =()=>{
      setIsSidebarOpen(false)
      }
  const openModal =()=>{
      SetIsModalOpen(true)
  }
    const closeModal =()=>{
      SetIsModalOpen(false)
  }
    return <AppContext.Provider value={{isModalOpen,isSidebarOpen,openModal,openSiderbar,closeModal,closeSiderbar}} >
    {children}
    </AppContext.Provider>
}
// Custom hook
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
 export{AppContext, AppProvider}