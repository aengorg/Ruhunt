import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import { MainPage } from './pages/main';
import { MapPage } from './pages/map';
import { TurPage } from './pages/rivals';

// import logoRivals from './assets/images/rivals.png';

import './App.css';

function App() {
  return (
    <div className='app'>
      <header className='app_header'>
        <Router>
          <ul className='app_menu menu'>
            <li className='menu_item'>
              <NavLink to='/community'>Community</NavLink>
            </li>
            <li className='menu_item'>
              <NavLink exact to='/'>
                Map
              </NavLink>
            </li>
            <li className='menu_item menu_item--rivals'>
              <NavLink to='/rivals'>
                {/* <img src={logoRivals} alt='logo rivals' height='30px' width='auto' /> */}
                Rivals
              </NavLink>
            </li>
          </ul>
        </Router>
      </header>
      <div className='app_content'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <MapPage />
            </Route>
            <Route path='/community'>
              <MainPage />
            </Route>
            <Route path='/rivals'>
              <TurPage />
            </Route>
            <Route path='/rivals/registration'>
              <TurPage />
            </Route>
            <Route path='/rivals/leaderboard'>
              <TurPage />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className='app_footer'>© {new Date(Date.now()).getFullYear()} RUHUNT </div>
    </div>
  );
}

export default App;
