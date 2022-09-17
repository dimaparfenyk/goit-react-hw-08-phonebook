import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  margin-right: 80px;
  margin-left: 40px;
  color: #ffffff;
  font-size: 24px;
  align-items: center;
`;

export const Container = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
`

export const UserGreet = styled.p`
  display: flex;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right:40px;
  font-size: 20px;
  line-height: 1.5;
  color: #fff;
`;

export const Button = styled.button`
  height: 40px;
  width: 120px;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
  color: #fff;
  background-color: #457aab;
  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color, color 250ms linear;

  :hover,
  :focus {
    background-color: #000cb6b7;
    color: #000;
  }
`;
