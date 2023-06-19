import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components

import Login from './pages/Login'
import Signup from './pages/Signup'
import FormClass from './Projet/FormClass'
import Home from './Projet/Home'
import Menu from './Projet/Menu'
import Contact from './Projet/Contact'
import About from './Projet/About'


function App() {
  const { user } = useAuthContext()

  return (

    <BrowserRouter>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu2' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route
          path="/menu"
          element={user ? <FormClass /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
