"use strict";

import React, { Component } from "react";
import styled from "styled-components";
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


/*************************************************************************/

const StartBase = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
`;

export class Report_category extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <StartBase>
                    <h1>This is the report category page</h1>
                    <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
                        <Select
                        // open= {open}
                        // onClose={handleClose}
                        // onOpen={handleOpen}
                        value= 'age'
                        // onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'demo-controlled-open-select',
                        }}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                </StartBase>
            </div>    
        )
    };
}    