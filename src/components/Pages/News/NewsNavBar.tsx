import React from 'react';
import { NavLink } from 'react-router-dom';

interface NewsNavBarProps{
  title: string
}

const NewsNavBar:React.FC<NewsNavBarProps> = ({title, children}) => {
  return (
    <>
    <nav style={{marginBottom: '20px'}}>
      <div className="nav-wrapper">
        <p className="brand-logo center">{title}</p>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
      </div>
    </nav>
    <>
      {children}
    </>
    </>
  );
}

export default NewsNavBar;
