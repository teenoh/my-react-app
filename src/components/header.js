import React, { useState} from 'react';
import '../styles/css/header/header.scss'
import uberEatsLogo from '../assets/images/Uber-Eats.png'
import { Link } from 'react-router-dom';


const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <header>
       <nav className={`header-wrapper ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className={`logo ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <i className='material-icons'>menu</i>
        </div>

          <div className='app-name'> 
          <span className="font1 joined-text">Uber</span>  <span className="font2">EATS</span> 
          </div>

          <div className='right-item'>

            <button className='login roundbtn' type='button'>
             <span className="glyphicon glyphicon-user spanspace">
              </span>
              <Link to='/Login' class='text_color'>Log in</Link>
            </button>

            <button className='signup roundbtn' type='button'>
            <Link to='/Signup' >Sign up</Link>
            </button>
          </div>

      </nav>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Add your sidebar content here */}

        <div className='sidebarBtnOne'>
          <button className='signup_sidebar' type='button'>
            <a href='/'> Sign up </a>
          </button>

        </div>
       
       <div className='sidebarBtnTwo'>
        <button className='login_sidebar' type='button'>
         <a href='/' id='signup'> Log in </a>
        </button>
       </div>
      
       <div className='list-container'>
          
        <p className="list-item"> 
        <a href='/'>Create a business account</a></p>

        <p className="list-item"> 
        <a href='/'>Add your restaurant</a></p>

        <p className="list-item"> 
        <a href='/'>Sign up to deliver</a>
        </p>

       </div>


        <div className="sidebar-bottom">

          <div className='logo-container'>
            <span className='logo'>   
              <img src={uberEatsLogo} alt="Uber Eats Logo" className="uber-logo"></img>
            </span>  
              
            <span className='logo-text'>There's more to love in the app</span>      
          </div>

          <div className='version'>
          <button className="iphone">
          <i className="fab fa-apple"></i> Iphone
          </button>
          <button className="android">
          <i className="fab fa-android"></i>Android</button>
          </div>
          
        </div>

      </div>

      <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

    </header>
  );
};

export default Header;

