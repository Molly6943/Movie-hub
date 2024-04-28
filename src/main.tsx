import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import router from "./routes";
import store from './store'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <RouterProvider
          router={router}
          fallbackElement={<App />}
        />
    </ChakraProvider>
  </React.StrictMode>
  </Provider>,
)
