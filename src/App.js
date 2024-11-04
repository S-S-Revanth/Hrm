import Dsh from './Cmp/Dsh'
import Finance from './Cmp/Finance'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Products from './Cmp/Products'


function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dsh/>}/>
      <Route path='/finance' element={<Finance/>}/>
      <Route path='/products' element={<Products/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}
export default App