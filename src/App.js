import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PrivateRoute from './utils/AppRoute';
import './App.css';
import Home from './views/Home';
import Demande from './views/AddDemande';
import AllDemandes from './views/AllDemandes';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          {/* <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
          </Route> */}
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/demande' element={<Demande/>}/>
          <Route exact path='/demandes' element={<AllDemandes/>}/>
        </Routes>
      </Fragment>
    </Router>
    
  );
}

export default App;
