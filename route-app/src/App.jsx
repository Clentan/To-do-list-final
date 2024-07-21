import { BrowserRouter, Routes , Route } from "react-router-dom";
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Homepage from './pages/Homepage';
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="Login" element={<Login/>}/>
       <Route path="Registration" element={<Registration/>}/>
      <Route path="AppLayout" element={<AppLayout/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    
    </BrowserRouter>


  );
}

export default App;
