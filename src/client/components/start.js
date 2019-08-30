"use strict";

import React, { Component } from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

/*************************************************************************/

const StartBase = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
`;

export class Start extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <StartBase>
                    <h1>This is my start page!</h1>
                    <Button component={Link} to="/report-category" variant="contained" color="primary">
                        Report
                    </Button>
                    <Button component={Link} to="/" variant="contained" color="primary">
                        Browse
                    </Button>
                </StartBase>
            </div>    
        )
    };
}    