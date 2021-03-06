import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

export const Header = ({ handleClick, currentTheme }) => {
  return (
    <Wrapper>
      <Logo>React BoilerPlate</Logo>
      <Button onClick={handleClick}>
        {currentTheme === "light" ? <FaSun /> : <FaMoon />}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: ${(props) => props.theme.colors.elements};
  box-shadow: 0 0 5px rgba(0,0,0,0.3);

  @media (max-width:400px) {
    padding: 20px;
    font-size: 14px;
  }
  }
`;

const Logo = styled.h3`
  margin: 5px 0 0 50px;

  @media (max-width: 440px) {
    margin: 5px 0 0 5px;
  }
`;

const Button = styled.button`
  border: none;
  letter-spacing: 1;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 50px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  ${({ theme }) => `
    background: ${theme.colors.background};
  `}

  @media (max-width: 440px) {
    padding: 5px;
    margin-right: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;
