import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserTemplate from './template/UserTemplate';
import HomePage from './pages/HomePage/HomePage';
import KhoaHoc from './pages/KhoaHoc/KhoaHoc';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserTemplate/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/khoahoc' element={<KhoaHoc/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
