/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="menu">
        <Button onClick={onDismiss}>
          <VisuallyHidden>Close</VisuallyHidden>
          <Icon id="close" />
        </Button>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background-color: rgba(96, 100, 108, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Content = styled(DialogContent)`
  width: 75%;
  height: 100%;
  padding: 32px;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
`;

const Button = styled.button`
  background-color: ${COLORS.white};
  border: none;
  color: ${COLORS.black};
  margin-left: auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  flex: 1;
`;

const NavLink = styled.a`
  & {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: calc(18 / 16 * 1rem);
    font-weight: ${WEIGHTS.medium};
  }

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  & {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: calc(14 / 16 * 1rem);
    font-weight: ${WEIGHTS.normal};
  }
`;
export default MobileMenu;
