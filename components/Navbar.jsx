import React from "react";
import { Box, Typography, styled, keyframes } from "@mui/material";
import { navData } from "../constants/data";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 20px 130px 20px 130px;
`;

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: lightgray;
  transition: background-color 0.3s;

  &:hover {
    background-color: lightblue;
    animation: ${pulseAnimation} 1s linear infinite;
  }
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  color: black;
  font-family: inherit;
`;

const Navbar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Link to={data.link} key={data.text} style={{ textDecoration: "none" }}>
          <Container>
            <img src={data.url} alt="logo" style={{ width: 74, height: 74 }} />
            <Text>{data.text}</Text>
          </Container>
        </Link>
      ))}
    </Component>
  );
};

export default Navbar;
