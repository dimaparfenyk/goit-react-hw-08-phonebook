import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #2a363b;
  &.active {
    color:  #3590e5;
  }
`;

export const AuthNav = () => {
    return (
        <div>
            <Link
                className={({ isActive }) => (isActive ? 'ActiveLink' : 'Link')}
                to="/register">
                Registration
            </Link>
            <Link
                className={({ isActive }) => (isActive ? 'ActiveLink' : 'Link')}
                to="/login">
                Log In
                </Link>
       </div>
    )
}