import React from 'react';
import Header from '../components/header';
import '../styles/css/landingpage.scss';
import { Link } from 'react-router-dom';



const LandingPage = () => {
  return (
    <div className='background-image'>
      <Header />
      <main>
      <p className='order'>Order food to your door</p>
        <section className="hero">

          <form>
              <div className="container">
                <div className="column address">
                <i className='fas fa-map-marker-alt location' ></i>
                  <p id="address-search" placeholder="Enter delivery address...">
                  </p>

                </div>

                <div className="column time">
                  <p>
                  <select id="fruit-selection" name="Pick Up now">
                    <option value="deliver now" > Deliver now</option>
                    <option value="schedule"  >Schedule for later</option>
                  </select>
                  </p>
                </div>

                <div className ="column find-food">
                  <button type='button' className='find-foodbtn' >
                   <Link to='/Home'>Find Food</Link>
                  </button>
                </div>

              </div>
          </form>
          <p className='signin_link'>
          <span className='signin'>Sign in </span>  <span>for your recent addresses</span> 
          </p>
        </section>

        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default LandingPage;
