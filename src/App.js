import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Events from './components/Events';
import Eve1 from './components/1';
import Eve2 from './components/2';
import AdminSignin from './components/AdminSignin';
import FrontPage from './components/FrontPage';
import Eve3 from './components/3';
import Eve4 from './components/4';
import Dashboard from './components/Dashboard';
import Addevent from './components/Addevent';
import ProfilePage from './components/ProfilePage';
import EditProfile from './components/EditProfile';
import { useEffect } from 'react';
import Bookings from './components/Bookings';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.title = 'Eventine';
  }, []);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Events' element={<Events />} />
      <Route path='/1' element={<Eve1 />} />
      <Route path='/2' element={<Eve2 />} />
      <Route path='/AdminSignin' element={<AdminSignin />} />
      <Route path='/FrontPage' element={<FrontPage />} />
      <Route path='/3' element={<Eve3 />} />
      <Route path='/4' element={<Eve4 />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/Addevent' element={<Addevent />} />
      <Route path='/ProfilePage' element={<ProfilePage />} />
      <Route path='/EditProfile' element={<EditProfile />} />
      <Route path='/Bookings' element={<Bookings />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
