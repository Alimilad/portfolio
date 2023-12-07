"use client"

import type { LinksName } from '@/lib/types'
import React ,{createContext, useState,useContext} from 'react'

type ActiveLinkContextProviderProps = {
    children:React.ReactNode
}


type ActiveLinkContextType = {
    activeLink:LinksName,
    setActiveLink: React.Dispatch<React.SetStateAction<LinksName>>,
    timeOfLastClick:number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}
const ActiveLinkContext = createContext<ActiveLinkContextType | null>(null);

export default function ActiveLinkContextProvider({ children }: ActiveLinkContextProviderProps) {
    const [activeLink, setActiveLink] = useState<LinksName>("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return <ActiveLinkContext.Provider value={{
      activeLink, setActiveLink, timeOfLastClick, setTimeOfLastClick
  }}>
      {children}
  </ActiveLinkContext.Provider>
}

export function useActiveLinkContext() {
    const context = useContext(ActiveLinkContext)
    if(context === null){
        throw new Error("ActiveLinkContext is null")
    }
    return context
}