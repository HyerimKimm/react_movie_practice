import MovieDetail from './Pages/MovieDetail';
import Movies from './Pages/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movies/>}/>
          <Route path='/detail/:id' element={<MovieDetail/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;