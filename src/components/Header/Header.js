import React from "react";
import styled from "styled-components/macro";

import { BREAKPOINTS, COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <TopBorder />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <NavMobile>
          <ShowMoreButton>
            <Icon id="shopping-bag" />
          </ShowMoreButton>
          <ShowMoreButton>
            <Icon id="search" />
          </ShowMoreButton>
          <ShowMoreButton>
            <Icon
              id="menu"
              onClick={() => {
                setShowMobileMenu(true);
              }}
              bileMenu
            />
          </ShowMoreButton>
        </NavMobile>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">CollectionsAndMOre</NavLink>
        </Nav>
        <ResponsiveSide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const NavMobile = styled.nav`
  display: none;
  --spacing: 34px;
  @media (${BREAKPOINTS.tablet}) {
    gap: var(--spacing);
    display: flex;
    max-width: fit-content;
  }
  @media (${BREAKPOINTS.phone}) {
    gap: calc(var(--spacing) / 2);
  }
`;
const ShowMoreButton = styled.button`
  background-color: ${COLORS.white};
  cursor: pointer;
  border: none;
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  min-height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: scroll;
  @media (${BREAKPOINTS.tablet}) {
    justify-content: space-between;
  }
`;

const TopBorder = styled.div`
  display: none;
  @media (${BREAKPOINTS.tablet}) {
    display: revert;
    border-bottom: 4px solid ${COLORS.gray[900]};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(16px, 3vw, 48px);
  margin: 0px 48px;
  @media (${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const ResponsiveSide = styled(Side)`
  @media (${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
