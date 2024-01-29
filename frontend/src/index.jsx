import React from 'react'
import ReactDOM from 'react-dom/client'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'


import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/cart_context.jsx'
import { ProductsProvider } from './context/products_context.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/usercontext.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { FilterProvider } from './context/filter_Context.jsx'


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
   
    supportedLngs:['en','fr'],
    fallbackLng: "en",
    detection: {
      order: [ 'cookie','htmlTag', 'localStorage',  'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense:false},
    
  });


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="dev-0010t4tl7n3umzng.us.auth0.com"
      clientId="dQi8yshvSeEWGbRLw2eHNgKbtQiuC9Ln"
      redirect_uri={window.location.origin}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      cacheLocation='localstorage'
    >
      <UserProvider>
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>
      <CartProvider>
        <FilterProvider>
              <App />
        </FilterProvider>
    </CartProvider>
      </ProductsProvider>
        </QueryClientProvider>
      </UserProvider>
    </Auth0Provider>
)
