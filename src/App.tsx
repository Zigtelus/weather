import './styles/global.css';
import  './App.scss';
import Main from './components/Main';
import Navigation  from './components/Navigation';
import ReactGA from 'react-ga';
import Popups from './components/Popups/PopupPush';


const TRACKING_GA = "UA-254825603-1"
ReactGA.initialize(TRACKING_GA)


function App() {

  console.log('11')

  return (
    <div className='App' >
      <Navigation />
      <Main />
      <Popups />
    </div>
  );
};

export default App;
