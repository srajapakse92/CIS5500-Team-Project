import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import TubeDBLogo from '../images/logo4.png';

import { Wrapper, Content, LogoImg } from './Header.styles';

const Header = () => {

  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImg src={TubeDBLogo} alt='tubedb-logo' />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Header;