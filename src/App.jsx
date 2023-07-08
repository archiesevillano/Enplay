import { Button } from 'react-bootstrap';
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
                  Download your favorite videos and musics for free online with just few clicks.
                </p>
              </div>
              <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                <URLInput />
                <p style={{ fontSize: "0.7rem", fontFamily: "var(--inter)", alignSelf: "flex-start", transform: "translate(3px, -13px)" }}>Search and Copy the URL of the video you wish to download and Paste it in here</p>
                <div className="container d-flex flex-row justify-content-center align-items-center gap-3">
                  <Button variant="dark" className="col-2">Convert</Button>
                  <Button variant="dark" className="col-2">Convert Last</Button>
                </div>
              </div>
              <p className="col-12 text-center">
                Effortlessly download your favorite videos and music from popular websites like YouTube, Facebook, and TikTok with our free and high-speed online video and audio downloader. Experience the convenience of accessing your most visited sites and grab your desired content in just a few clicks.
              </p>
            </div>
          </section>
        </AppData>
      </AppRoutes>
    </div>
  )
}

export default App;
