import React, { useCallback } from 'react';
import { TiHome } from 'react-icons/ti';
import { HiCash } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Wrapper, Menu, Content, Link } from './styles';

import Logo from '../../assets/images/logo.png';

import Logout from '../../assets/icons/logout.svg';

function SignedLayout({ children }) {
  const { signOut } = useAuth();
  const history = useHistory();

  const logout = useCallback(async () => {
    try {
      signOut();

      history.push('/');
    } catch (error) {}
  }, [history, signOut]);

  return (
    <Wrapper>
      <Menu>
        <div className="logo">
          <img src={Logo} alt="HXMais" />
        </div>
        <div className="links">
          <Link route={history.location.pathname} to="/dashboard">
            <TiHome size={24} color="#FFF" />
          </Link>
          <Link route={history.location.pathname} to="/dashboard/sales">
            <HiCash size={24} color="#FFF" />
          </Link>
        </div>
        <div className="logout">
          <button onClick={logout}>
            <img src={Logout} alt="Sair" />
            <p>Sair</p>
          </button>
        </div>
      </Menu>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default SignedLayout;
