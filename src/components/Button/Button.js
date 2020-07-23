import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-weight: 500;
  margin-top: .625rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: #fff;
  border: 1px solid #f8f8f8;
  color: ${({ color }) => color};
  transition: box-shadow linear .15s;

  &:hover {
    color: #333;
    background: #f8f8f8;
    box-shadow: none !important;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const Button = ({
  text,
  value,
  color,
  className,
  onMouseEnter,
  onMouseLeave
}) => (
    <StyledButton
      color={color}
      className={className}
      onMouseEnter={() => onMouseEnter(value)}
      onMouseLeave={() => onMouseLeave(undefined)}
    >
      {text}
    </StyledButton>
  );

export default Button;