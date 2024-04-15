import "@/styles/globals.css";
import { XircusTonProvider } from '@xircus-web3/ton-react'
import { ChakraProvider } from '@chakra-ui/react'
export default function App({ Component, pageProps }) {
  return (
  <XircusTonProvider> 
    <ChakraProvider >
  <Component {...pageProps}  />
  </ChakraProvider>
  </XircusTonProvider>
  
  )

}
