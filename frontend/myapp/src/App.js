import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp.js';
import {
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'




function App() {
  
  return (
    <Router>
      <div className='bg-dark text-light'>
        <Routes>
          <Route exect path='/' element={<Home />}></Route>
          <Route exect path='/Login' element={<Login />}></Route>
          <Route exect path='/SignUp' element={<SignUp />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
