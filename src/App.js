import './App.css';
import Biography from './Components/Biography/Biography';
import Header from './Components/Header/Header';
import {Routes, Route } from "react-router-dom";
import element, { Hr } from './Components/Constants/elements';
import Footer from './Components/Footer/Footer';
import Videos from './Components/Videos/Videos';
import Banner from './Components/Banner/Banner';
import Main from './Components/Main/Main';
import FrontendPortfolio from './Components/Portfolio/Frontend';
import BackendPortfolio from './Components/Portfolio/Backend';
import { useTranslation, } from 'react-i18next';
import { Suspense } from 'react';

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

      <Routes>
        <Route index element={App}/>
        <Route path='bio' element={<Biography biography={t}/>}/>
        <Route path='videos' element={<Videos videos={t}/>}/>
      </Routes>
      <Main main={t}/>
      <Hr />
      <FrontendPortfolio frontend={t}/>
      <BackendPortfolio backend={t}/>
      <hr style={{color: element.text}}/>
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

