// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

// these does not extend the theme, I don't know why
const colors = {
  brand: {
    green: '#16db93',
    pink: '#ff6b6b',
    gray: '#e8e9f3',
    black:'#272635',
    yellow:'#ffe66d'
  },
}
const fonts = {
  heading: 'Open Sans, sans-serif',
    body: 'Raleway, sans-serif',
}
export const theme = extendTheme({ colors })

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider >
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}