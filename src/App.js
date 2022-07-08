import './categories.styles.scss'
import Home from './components/routes/home/home.component';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home/>} />
    </Routes>
  )
}

export default App;
