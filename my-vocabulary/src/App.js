import {Routes, Route, useLocation} from 'react-router-dom'
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { Home } from './components/Home';
import { Logout } from './components/Logout';
import { UserAuthContextProvider } from './context/authUserContext.js';


function App() {
  const location = useLocation()
  return (
    <div className='bg-gradient-to-l from-cyan-400 to-indigo-600 min-h-screen flex flex-col-reverse md:flex-col'>
       <UserAuthContextProvider>
       {location.pathname === '/' ? <SignIn /> : null}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Logout/>}/>
        </Routes>  
       </UserAuthContextProvider>
    </div>
  );
}

export default App;
