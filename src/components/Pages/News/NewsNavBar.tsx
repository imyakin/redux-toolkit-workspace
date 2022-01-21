import React from 'react';
import { NavLink } from 'react-router-dom';

interface NewsNavBar{
  title: string
}

const NewsNavBar:React.FC<NewsNavBar> = ({title}) => {
  return (
    <nav style={{marginBottom: '20px'}}>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">{title}</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default NewsNavBar;
