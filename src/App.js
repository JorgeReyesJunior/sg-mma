import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel/Carousel';
import Banner1 from './components/Banners/Banner1';
import Banner2 from './components/Banners/Banner2';
import Banner3 from './components/Banners/Banner3';
import './App.css';

const slides = [
  { component: <Banner1 /> },
  { component: <Banner2 /> },
  { component: <Banner3 /> }
];

function App() {
  return (
    <div className="o-app">
      <Header />
      <main className="o-app__main">
        <Carousel slides={slides} slideTime={5} />
      </main>
    </div>
  );
}

export default App;
