import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import About from './pages/About';
import Home from './pages/Home';
import NewsAndEvents from './pages/NewsAndEvents';
import Shop from './pages/Shop';
import Testimonials from './pages/Testimonials';
import './App.css';

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let useEffectAborted = false;

    function scrollToTop() {
      window.scrollTo(0, 0)
    };
    function scrollToID() {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        window.scrollTo({ top: element.offsetTop})
      }
    };

    if(!useEffectAborted) {
      (hash === '') ? scrollToTop() : scrollToID();
    }

    return (
      () => {
        useEffectAborted = true;
      }
    );
  }, [pathname, hash]);

  return (
    <div className="o-app">
      <Header />
      <main className="o-app__main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/news-and-events">
            <NewsAndEvents />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/testimonials">
            <Testimonials />
          </Route>
        </Switch>
    </main>
    </div>
  );
};

export default App;
