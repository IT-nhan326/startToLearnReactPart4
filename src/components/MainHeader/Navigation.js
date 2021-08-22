import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
  const Ctx = useContext(AuthContext)
        return (
          <nav className={classes.nav}>
            <ul>
              {Ctx.isLoggedIn && (
                <li>
                  <a href='/'>Users</a>
                </li>
              )}
              {Ctx.isLoggedIn && (
                <li>
                  <a href='/'>Admin</a>
                </li>
              )}
              {Ctx.isLoggedIn && (
                <li>
                  <button onClick={Ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
};

export default Navigation;
