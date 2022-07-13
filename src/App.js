import './categories.styles.scss'
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';
import {Routes, Route} from 'react-router-dom'

function Shop(){
  return <h1>This is the shop page</h1>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
