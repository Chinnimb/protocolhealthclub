import { createContext, useContext, useState, useCallback } from 'react'
import BloodworkModal from '../components/BloodworkModal'

const GetStartedContext = createContext(() => {})

export function GetStartedProvider({ children }) {
  const [open, setOpen] = useState(false)

  const openModal = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => setOpen(false), [])

  return (
    <GetStartedContext.Provider value={openModal}>
      {children}
      <BloodworkModal open={open} onClose={closeModal} />
    </GetStartedContext.Provider>
  )
}

export function useGetStarted() {
  return useContext(GetStartedContext)
}
