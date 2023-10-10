import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLogin } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLogin && (
        <NavLink className={css.link} to="/contact">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
