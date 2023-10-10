import { AuthorizationNav } from 'components/authorizationNav/AuthorizationNav';
import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/user-menu/UserMenu';
import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLogin } = useAuth();

  return (
    <>
      <Header>
        <Navigation />
        {isLogin ? <UserMenu /> : <AuthorizationNav />}
      </Header>
    </>
  );
};
