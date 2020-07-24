import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 32px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ color }) => color};

  width: 250px;
  margin: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: #fff;
  border-radius: 10px;
  padding: 20px 25px;
  border: 1px solid #f8f8f8;
  transition: box-shadow linear .15s;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);

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