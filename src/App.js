import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home-page/Home';


function App() {
  return (
    <main className='main'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
