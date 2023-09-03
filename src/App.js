// import logo from './logo.svg';
// import './App.css';

import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App" style={{width:"100%"}}>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
      </Routes>

       
    </div>
  );
}

export default App;