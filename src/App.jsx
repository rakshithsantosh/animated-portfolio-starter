import About from './components/About/About'
import Buying from './components/Buying/Buying'
import Home from './components/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Selling from './components/Selling/Selling'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/buying" element={<Buying/>}></Route>
            <Route path="/selling" element={<Selling/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
