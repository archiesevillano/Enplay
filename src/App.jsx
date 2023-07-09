import { Button } from 'react-bootstrap';
import './App.css';
import AppData from './AppData';
import AppRoutes from './AppRoutes';
import AppHeader from './components/AppHeader/AppHeader';
import Brand from './components/Brand/Brand';
import URLInput from './components/URLInput/URLInput';
import AppFooter from './components/AppFooter/AppFooter';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <AppData>
        <AppRoutes>
          <AppHeader />
          <Outlet />
        </AppRoutes>
        <AppFooter />
      </AppData>
    </div >
  )
}

export default App;
