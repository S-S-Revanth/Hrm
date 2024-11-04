import Dsh from './Cmp/Dsh'
import Finance from './Cmp/Finance'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dsh/>}/>
      <Route path='/finance' element={<Finance/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}
export default App