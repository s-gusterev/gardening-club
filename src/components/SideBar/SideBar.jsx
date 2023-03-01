import './SideBar.css';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const SideBar = () => {
  return (
    <aside className='sidebar'>
      <Logo />
      <Menu />
    </aside>
  );
};

export default SideBar;
