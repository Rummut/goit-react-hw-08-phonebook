import { AuthorizationNav } from 'components/authorizationNav/AuthorizationNav';
import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/user-menu/UserMenu';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLogin } = useAuth();

  return (
    <header>
      <Navigation />
      {isLogin ? <UserMenu /> : <AuthorizationNav />}
    </header>
  );
};
