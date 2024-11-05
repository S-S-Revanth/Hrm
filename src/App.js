import Dsh from './Cmp/Dsh'
import Finance from './Cmp/Finance'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Massage from './Cmp/Massage'


function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dsh/>}/>
      <Route path='/finance' element={<Finance/>}/>
      <Route path='massage' element={<Massage/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}
export default App