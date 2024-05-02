import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from "@chakra-ui/color-mode";
import { BrowserRouter } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'
import { RecoilRoot } from 'recoil';

const styles ={
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#101010')(props),
    },
  })
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const colors = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e"
  }
}

const theme = extendTheme({ styles, config, colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  // al tener el modo estricto se asegura que no se rompa la app y revisa dos veces.
  <React.StrictMode>
    <RecoilRoot>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
    </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)
