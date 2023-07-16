
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import UserListing from './Components/UserListing'
import Adduser from './Components/Adduser'
import Updateuser from './Components/Updateuser'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './Redux/store'
import 'react-toastify/dist/ReactToastify.min.css';
function App() {
 

  return (
    <>
    <Provider store={store}>
     <BrowserRouter>
     <div className='header'>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
     </div>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/user' element={<UserListing/>}></Route>
      <Route path='/user/add' element={<Adduser/>}></Route>
      <Route path='/user/edit/:code' element={<Updateuser/>}></Route>
    </Routes>
     </BrowserRouter>
     <ToastContainer className="toast-container" position='bottom-right'/>
     </Provider>
    </>
  )
}

export default App
