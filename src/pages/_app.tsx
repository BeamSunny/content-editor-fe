// Lib
import React, { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import i18next from 'i18next'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'

// Include in project
import { defaultLanguage, languages } from '@i18n/index'
import '@styles/custom8ui.scss'
import '@styles/customNotiStack.scss'
import '@styles/global.scss'
import '@styles/typography.scss'
import StyleVariable from '@styles/variables'
import { store } from '@states/store'
import { Loading, ModalConfirm } from '@components/base'
import { SnackbarCloseButton } from '@components/base/Notification'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const { asPath, query } = router

  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = (query.lang as string) || langSlug || defaultLanguage

  const [clientLanguage, setClientLanguage] = useState<string>(language)

  useEffect(() => {
    setClientLanguage(language)
  }, [language])

  // Don't trigger `i18next.changeLanguage()` on root folder, use `router` to redirect to the specific language
  if (asPath !== '/' && asPath !== '/404') {
    i18next.changeLanguage(clientLanguage)
  }

  return (
    <Provider store={store}>
      <StyleVariable>
        <SnackbarProvider
          maxSnack={5}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          action={(snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />}
        >
          <Component {...pageProps} />

          <ModalConfirm />
          <Loading />
        </SnackbarProvider>
      </StyleVariable>
    </Provider>
  )
}

export default MyApp
