import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserTemplate from './template/UserTemplate';
import HomePage from './pages/HomePage/HomePage';
import KhoaHoc from './pages/KhoaHoc/KhoaHoc';
import KhDetail from './Components/KhDetail/KhDetail';
import InfoPage from "./pages/InfoPage/InfoPage";
import EventPage from "./pages/EventPage/EventPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserTemplate/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/khoahoc' element={<KhoaHoc/>} />
          <Route path='/detail/:id' element={<KhDetail/>} />
        </Route>
        <Route path="/info" element={<UserTemplate />}>
          <Route index element={<InfoPage />} />
        </Route>
        <Route path="/event" element={<UserTemplate />}>
          <Route index element={<EventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
