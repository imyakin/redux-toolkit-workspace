import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import News from './components/Pages/News/News';
import Home from './components/Pages/Home/Home';

function App() {
  
  enum news {
    BBC = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4d0211344ea24cacaf4c9767a39beb6b',
    Apple = 'https://newsapi.org/v2/everything?q=apple&from=2022-01-18&to=2022-01-18&sortBy=popularity&apiKey=4d0211344ea24cacaf4c9767a39beb6b',
    Bitcoin = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=4d0211344ea24cacaf4c9767a39beb6b'
  }

  const routes = [
    {
    path: "/",
    element: <Home/>
    },
    {
    path: "/apple",
    element: <News newsTitle='Apple News' urlLink={news.Apple}/>
    },
    {
    path: "/bbc",
    element: <News newsTitle='BBC News' urlLink={news.BBC}/>
    },
    {
    path: "/bitcoin",
    element: <News newsTitle='Bitcoin News' urlLink={news.Bitcoin}/>
    },

  ]
  
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => <Route key={route.path} path={route.path} element={route.element}/>)} 
      </Routes>
    </BrowserRouter>
  );
}

export default App;