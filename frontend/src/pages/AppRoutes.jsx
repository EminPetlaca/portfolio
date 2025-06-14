import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';


export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future: About, Portfolio, Contact */}
      </Routes>

    </BrowserRouter>
    </>
  );
}
