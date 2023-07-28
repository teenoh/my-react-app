import React from 'react';
import '../styles/css/header.scss'

const Header = () => {
  return (
    <header>
      <nav className="header-wrapper">
          <div className="logo">
            <i className='material-icons'>menu</i>
          </div>

          <div className='app-name'> 
          <span className="font1 joined-text">Uber</span>  <span className="font2">EATS</span> 
          </div>

          <div className='right-item'>
            <button className='login roundbtn' type='button'>
             <span className="glyphicon glyphicon-user spanspace">
              </span>
              Log in
            </button>

            <button className='signup roundbtn' type='button'>Sign up</button>
          </div>
      </nav>
    </header>
  );
};

export default Header;

