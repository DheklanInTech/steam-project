import { type } from "os";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;

  @media (max-width: 950px) {
    flex-direction: column;
    width: 100%;

    height: ${({ isOpen }) => (isOpen ? "100h" : "0")};
    transition: height 0.6s ease-in;
  }
`;

export const Button = styled.button`
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 0.3rem 0;
  border: 1px solid #fff;
  width: 110px;

  &:hover {
    color: #fff;
    transition: 0.1s ease;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const MenuLinks = styled.li`
  color: #ffffff;
  display: inline-block;
  font-size: 16px;
  margin-right: 4rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  position: relative;
  opacity: 90%;

  &:hover {
    // color: rgba(2, 104, 55, 1);
  }

  @media (max-width: 950px) {
    padding: 1rem 0;
    margin-right: 0;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;

  @media (max-width: 950px) {
    flex-direction: column;
    overflow: hidden;
    display: flex;
    width: 100%;
    align-items: center;
  }
`;

export const Nav = styled.div`
  background: #0d0e13;
  color: #ffffff;
  padding-left: 3rem;
  padding-right: 3rem;

  @media (max-width: 950px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const Logo = styled.img`
  cursor: pointer;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 950px) {
    display: flex;
  }
`;
