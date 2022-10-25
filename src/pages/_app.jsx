import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from "../styled/global"
import theme from "../styled/theme"

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle/>
      </ThemeProvider>
  )
}

export default MyApp
