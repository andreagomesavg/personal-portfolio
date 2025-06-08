
"use client"
import { useState, useEffect } from 'react'

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Simula 2 segundos de carga

    return () => clearTimeout(timer)
  }, [])

  return isLoading
}