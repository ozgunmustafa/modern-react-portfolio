import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Fade from 'react-reveal/Fade';

const Nav = styled.nav`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 25px;

  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav className="container">
      <div style={{ position: 'relative', zIndex: '999' }}>
        <h3 className="site-name ">Mustafa Özgün</h3>
        <h4 className="slogan text-muted">
          <Fade bottom cascade>
            Developer + Designer
          </Fade>
        </h4>
      </div>

      <Burger />
    </Nav>
  );
};

export default Navbar;
