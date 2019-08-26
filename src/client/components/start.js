"use strict";

import React from "react";
import styled from "styled-components";

/*************************************************************************/

const StartBase = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
`;

export const Start = () => (
  <StartBase>
    <h1>This is my start page!</h1>
  </StartBase>
);
