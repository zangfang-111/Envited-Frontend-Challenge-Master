import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import LandingLayout from './landing';
import CreateEvent from './event/CreateEvent';
import Event from './event';

const RootRoutes = () => (
  <div className='container'>
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingLayout />} />
        <Route exact path='/create' element={<CreateEvent />} />
        <Route exact path='/event' element={<Event />} />
      </Routes>
    </Router>
  </div>
);

export default RootRoutes;
