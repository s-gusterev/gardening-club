import './Menu.css';
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        <li className='menu__item'>
          <Link className='menu__link' to='/'>
            Главная
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' to='/about'>
            Статьи
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' to='/about'>
            Форум
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' to='/about'>
            О клубе
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' to='/about'>
            Отзовик
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' to='/about'>
            Найти эксперта
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' to='/about'>
            Магазин
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
