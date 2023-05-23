import Movies from './Pages/Movies';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movies/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;