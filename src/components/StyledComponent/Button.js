import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const LinkButton = styled(Link)`
    width: 140px;
    height: 40px;
    font-size: 1em;
    font-weight: 500;
    margin: 1em auto;
    padding: 0.25em 1em;
    border-radius: 5px;
    color: #ffffff;
    border: 2px solid #ffffff;
    background: transparent;
    text-align: center;
`;

export const Button = styled.button`
    width: 140px;
    height: 35px;
    font-size: 0.875em;
    font-weight: 500;
    padding: 0.25em 1em;
    border-radius: 5px;
    color: #ffffff;
    border: 2px solid #ffffff;
    background: transparent;
`;

export const MenuButton = styled.div`
    z-index: 99;
    cursor: pointer;
`;

const handshake = keyframes`
  0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
  }

  6.5% {
      -webkit-transform: translateX(-6px) rotateY(-9deg);
      transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
      -webkit-transform: translateX(5px) rotateY(7deg);
      transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
      -webkit-transform: translateX(-3px) rotateY(-5deg);
      transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
      -webkit-transform: translateX(2px) rotateY(3deg);
      transform: translateX(2px) rotateY(3deg);
  }

  50% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
  }
`;

const rotateInUpRight = keyframes`
  from {
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: scale(1) rotate3d(0, 0, 1,  -170deg);

  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: scale(1.1) translate3d(0, 0, 0);
  }
`;

export const QuizWrong = styled.img`
    animation: ${handshake} 600ms ease-in-out both;
`;

export const QuizCorrect = styled.img`
    animation: ${rotateInUpRight} 600ms both;
`;
