import './css/App.css';
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';

const Layout = () => (
  <div className="container">
    <Navbar />
    <Outlet />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/bookstore2" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
