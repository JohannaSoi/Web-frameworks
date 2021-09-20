import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SideSection from './components/SideSection';
import NewsNotification from './components/NewsNotification';

function App() {
  return (
    <div>
      <Header />

      <NewsNotification topic= 'HS-ANALYYSI' body='Kissat ovat parempia kuin koirat'/>
      <NewsNotification topic= 'KOLUMNI' body='Korkeakouluopiskelijat palaneet loppuun'/>
      <NewsNotification topic= 'KOTIMAA' body='Hallitus jakaa jokaiselle suomalaiselle 1000€'/>
     <MainSection/>
      <SideSection/>
    
    </div>
  );
}

export default App;
