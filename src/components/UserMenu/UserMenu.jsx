import {
  UserGreet,
  Button,
  Container
} from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth/authSelectors';
import { authOperations } from 'redux/auth/authOperation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(authSelectors.getUserName);

  return (
    <Container>
        {/* <LogoNavLink to="/">
          ContactBook
        </LogoNavLink> */}
          <UserGreet> Welcome,{ userName} !</UserGreet>
        <Button
          type="button"
          onClick={() => {
            dispatch(authOperations.logOut());
            navigate('/');
          }}
        >
          Log out
        </Button>
      
    </Container>
  );
};
