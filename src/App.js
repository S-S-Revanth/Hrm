import Dsh from './Cmp/Dsh';
import Finance from './Cmp/Finance';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Massage from './Cmp/Massage';  // Keep the import from prajwal branch
import Products from './Cmp/Products';  // Keep the import from master branch
import Event from './Cmp/Event';  // Keep the import from master branch

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dsh />} />
        <Route path='/finance' element={<Finance />} />
        <Route path='/massage' element={<Massage />} />  {/* Keep the route for Massage */}
        <Route path='/products' element={<Products />} />  {/* Keep the route for Products */}
        <Route path='/event' element={<Event />} />  {/* Keep the route for Event */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;