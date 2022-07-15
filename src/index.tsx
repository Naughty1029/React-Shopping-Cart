import { StrictMode } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from 'components/App'

/* Theme */
import { ThemeProvider } from 'commons/style/styled-components'
import { theme } from 'commons/style/theme'
import GlobalStyle from 'commons/style/global-style'

/* Context Providers */
import { ProductsProvider } from 'contexts/products-context/ProductsContext'

const root = document.getElementById('root')!
const container = ReactDOMClient.createRoot(root)

container.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </ThemeProvider>
  </StrictMode>
)
