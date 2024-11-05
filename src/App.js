import Dsh from './Cmp/Dsh';
import Finance from './Cmp/Finance';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Products from './Cmp/Products';  // Keep the import from master branch
import Event from './Cmp/Event';  // Keep the import from master branch
import Report from './Cmp/Report';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dsh />} />
        <Route path='/finance' element={<Finance />} />
    
        <Route path='/products' element={<Products />} />  {/* Keep the route for Products */}
        <Route path='/event' element={<Event />} />  {/* Keep the route for Event */}
        <Route path='/report'  element={<Report/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;