
import './App.css'
import HomePage from './Component/HomePage/HomePage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SigninPage from './Component/SigninPage/SigninPage'
import CreateAccnPage from './Component/CreateAccnPage/CreateAccnPage'
import Profile from './Component/Profile/Profile'

function App() {
  return(
    <>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/Signin' element={<SigninPage></SigninPage>}></Route>
          <Route path='CreateAccount' element={<CreateAccnPage></CreateAccnPage>}></Route>
          <Route path='/Profile' element={<Profile></Profile>}></Route>
        </Routes>
     
      
    </>
  )
 
}

export default App
