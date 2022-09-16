import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0 12px;
  font-weight: 500;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.537);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(0.9);
  }
  &.active {
    color: #fc02f9;
  }
`;