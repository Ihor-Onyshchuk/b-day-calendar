import React from 'react';
import styled from 'styled-components';

import loadingIndicator from '../../assets/img/load-indicator.gif';

const StyledIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .load-img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    z-index: 2;
    transform: translate(-50%, -50%);
  }
`;

const LoadingIndicator = () => (
  <StyledIndicator>
    <img className="load-img" src={loadingIndicator} alt="" />
  </StyledIndicator>
);

export default LoadingIndicator;