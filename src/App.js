import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import '../src/App.scss'
import LandingPage from './Screens/landingpage';
import HomeScreens from './Screens/homeScreens';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>

        <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<HomeScreens />} />

        {/* Add other components or content here */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;
