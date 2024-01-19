import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register'
import Header from './components/Header';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <>
      <div className='container'>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<PrivateRoute/>}>
                <Route path='/' element={<Home/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/quiz' element={<Quiz/>}/>
            <Route path='/result' element={<Result/>}/>
          </Routes>
        </Router>
        <ToastContainer/>
      </div>
    </>
  );
}

export default App;
