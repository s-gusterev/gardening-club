import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
const Layout = () => {
  return (
    <>
      <SideBar />
      <div className='content'></div>
    </>
  );
};

export default Layout;
