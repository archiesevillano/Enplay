import './App.css';
import AppData from './AppData';
import AppRoutes from './AppRoutes';
import AppHeader from './components/AppHeader/AppHeader';
import Brand from './components/Brand/Brand';
import URLInput from './components/URLInput/URLInput';

const App = () => {
  return (
    <div className="app">
      <AppRoutes>
        <AppData>
          <AppHeader />
          <section className="app__main my-5">
            <div className='container d-flex flex-column justify-content-center align-items-center col-md-6 gap-5'>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Brand />
                <p className="w-75 text-center">
                  Download your favorite videos and musics with just few clicks
                  Free video and Audio Downloader
                </p>
              </div>
              <URLInput />
            </div>
          </section>
        </AppData>
      </AppRoutes>
    </div>
  )
}

export default App;
