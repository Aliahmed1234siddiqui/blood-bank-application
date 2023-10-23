import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'

import Protected from '../Pages/Protected'
import { Provider } from 'react-redux'
import Store from '../config/Redux/Store'

import Accepter from '../Pages/Acceptor'
import Main from '../Pages/Main'
import Donor from '../Pages/Donor'
import Acceptor from '../Pages/Acceptor'
export default function ARouter() {
  return (
    <div>
      <Provider store={Store}>
      <Router>
        <Routes>
            <Route path='Signup' element={<Signup/>} />
            <Route path='Login' element={<Login/>} />
            <Route path='Donor/:id' element={<Donor/>} />
            <Route path='Acceptor/:id' element={<Acceptor/>} />
            <Route path='/' element={<Protected Screen={Main}/>} />

            
            


        </Routes>
      </Router>
      </Provider>
    </div>
  )
}
