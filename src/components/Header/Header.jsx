import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const isLogin = !true;

  return (
    <header className='header'>
      <form className='header__search'>
        <input
          className='header__input'
          type='text'
          name='search'
          placeholder='Найти'
        />
      </form>

      <div className='header__auth'>
        {isLogin && (
          <>
            <Link
              className='header__auth-link header__auth-link_color_light header__auth-link_type_login'
              to='/login'
            >
              Войти
            </Link>
            <Link
              className='header__auth-link header__auth-link_color_dark header__auth-link_type_register'
              to='/register'
            >
              Регистрация
            </Link>
          </>
        )}

        <div className='header__notification'></div>
        <Link className='header__avatar'>A</Link>
      </div>
    </header>
  );
};

export default Header;
