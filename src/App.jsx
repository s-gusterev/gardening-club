import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='container app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
