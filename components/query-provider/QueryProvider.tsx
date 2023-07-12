"use client"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import React, { ReactNode } from 'react'
interface QueryProviderProps {
  children: ReactNode
}
const queryClient = new QueryClient();
function QueryProvider({children}: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )

}

export default QueryProvider