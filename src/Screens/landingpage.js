import React from 'react';
import Header from '../components/header';
import '../styles/css/landingpage.scss';



const LandingPage = () => {
  return (
    <div className='background-image'>
      <Header />
      <main>
      <h1 className='order'>Order Food to your door!</h1>
        <section className="hero">

          <form>
              <div className="container">
                <div className="column address">
                <i className='fas fa-map-marker-alt location' ></i>
                  <p id="address-search" placeholder="Enter an address...">
                  </p>

                </div>

                <div className="column time">
                  <p>
                  <select id="fruit-selection" name="Pick Up now">
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                    <option value="strawberry">Strawberry</option>
                  </select>
                  </p>
                 
                </div>

                <div className ="column">
                  <button type='button'>
                    Find Food
                  </button>
                </div>

              </div>
          </form>

  

          {/* <label htmlFor="address-search">Search Address:</label>
              <input type="text" id="address-search" placeholder="Enter an address..." />
              <input type="submit" value="Search" /> */}

        </section>

        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default LandingPage;
