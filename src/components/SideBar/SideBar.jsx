import './SideBar.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Social from '../Social/Social';

const SideBar = () => {
  return (
    <aside className='sidebar'>
      <Logo />
      <Menu />
      <Social />
      <Link to='/' className='sidebar__link'>
        Пользовательское соглашение
      </Link>
    </aside>
  );
};

export default SideBar;
