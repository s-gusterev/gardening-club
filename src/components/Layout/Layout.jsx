import './Layout.css';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
const Layout = () => {
  return (
    <>
      <SideBar />
      <div className='main'>
        <Header />
        <main className='content'>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
