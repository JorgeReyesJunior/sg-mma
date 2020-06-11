import React from 'react';
import Banner1 from './components/Banners/Banner1';
import Banner2 from './components/Banners/Banner2';
import Banner3 from './components/Banners/Banner3';
import Carousel from './components/Carousel/Carousel';
import Curriculum from './components/Curriculum/Curriculum.js';
import Header from './components/Header';
import './App.css';

/**
 * 
 * TODO:
 *  - Add slides for: BJJ, KIDS, Striking, Wrestling, Women's Self-defense.
 * 
 */
const slides = [
  { component: <Banner1 /> },
  { component: <Banner2 /> },
  { component: <Banner3 /> },
  { component: <Banner1 /> },
  { component: <Banner2 /> },
];

function App() {
  return (
    <div className="o-app">
      <Header />
      <main className="o-app__main">
        <section id="home">
          <Carousel slides={slides} slideTime={5} />
          <h1>Explore the Artemis Academy Programs</h1>
          <p>Description.</p>
        </section>
        <Curriculum />
        {/* TODO: Button will open/close content */}
        {/* TODO: Make more cards */}
        {/* <section>
          <h1>What would you like?</h1>
          <p>Join the family</p>
          <button>Learn more</button>
          <p>Learn Online</p>
          <button>Learn more</button>
          <p>Take a Test</p>
          <button>Learn more</button>
          <p>Become an Instructor</p>
          <button>Learn more</button>
          <p>Gear</p>
          <button>Learn more</button>
        </section> */}
      </main>
    </div>
  );
}

export default App;
