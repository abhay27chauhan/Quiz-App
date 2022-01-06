import styled from "styled-components";
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
