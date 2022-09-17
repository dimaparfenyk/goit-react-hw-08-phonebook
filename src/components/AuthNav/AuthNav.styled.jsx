import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
   display: flex;
  text-decoration: none;
  padding: 0 12px;
  font-weight: 500;
  font-size: 18px;
  color: white;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  &.active {
    color: #001fff;
  }
`;

export const NavBox = styled.div`
display:flex;
`

export const Container = styled.div`
display:flex;
`
