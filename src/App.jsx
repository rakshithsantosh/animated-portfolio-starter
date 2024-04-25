import About from './components/About/About'
import Home from './components/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
