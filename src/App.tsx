import './styles/global.css';
import  './App.scss';
import Main from './components/Main';
import  Navigation  from './components/Navigation';
import { Registration } from './components/Registration';
import ImgWeatherHoc from './hocs/img';






function App() {
  
  return (
    <div className='App' >
      <Registration />
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
