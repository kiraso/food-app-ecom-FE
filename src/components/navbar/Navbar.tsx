import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import UserMenu from './UserMenu';
import Search from './Search';
import { Route } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
