import React from 'react';
import styled, {css, keyframes} from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

const StyledButton = styled.button.attrs(props => ({
    outlined: true,
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  align-self: ${({align}) => align || 'start'};

  &:focus {
    outline: none;
  }

  &:hover {
    animation: ${rotateAnimation} 1s 1 ease;
  }

  ${props => props.primary && css`
    color: ${props => props.color || props.theme.colors.primary};
    background: ${({background}) => background || 'white'};
  `}

  ${props => props.outlined && css`
    color: ${props => props.color || props.theme.colors.primary};
    border: 1px solid ${props => props.color || props.theme.colors.primary};
    background: transparent;
  `}
`

const LargeButton = styled(StyledButton)`
  font-size: 32px;
`

const Button = (props) => {
    return <StyledButton {...props} />
};

export default Button;