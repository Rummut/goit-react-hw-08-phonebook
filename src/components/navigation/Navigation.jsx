import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLogin } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLogin && <NavLink to="/contact">Contacts</NavLink>}
    </nav>
  );
};
