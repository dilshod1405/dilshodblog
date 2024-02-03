import './App.css';
import { useTranslation, } from 'react-i18next';
import { Suspense } from 'react';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Components from './Components/Component/Component';

const locales = {
  en: {title: 'en'},
  uz: {title: 'uz'},
  ru: {title: 'ru'},
  kr: {title: 'kr'}
};

function App() {
  const {t, i18n} = useTranslation();
    return (
      <div className="App">
      <Header header={t} on={locales} btn={i18n}/>
      <Banner banner={t}/>

      <Components biography={t} videos={t} main={t} frontend={t} backend={t}/>

      <Footer footer={t}/>
    </div>
    )
  }

export default function WrappedApp() {
  return (
    <Suspense fallback="loading...">
      <App />
    </Suspense>
  )
};

