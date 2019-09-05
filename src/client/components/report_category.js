"use strict";

import React, { Component } from "react";
import styled from "styled-components";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';



/*************************************************************************/

const StartBase = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
`;

export class Report_category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    handleChange(ev) {
        this.setState({ category: ev.target.value });
    }

    onSubmit(ev){
        

    }

    render() {
        return (
            <div>
                <StartBase>
                    <h1>This is the report category page</h1>
                    <InputLabel htmlFor="demo-controlled-open-select">Category</InputLabel>
                        <Select
                        name = "category"
                        value= {this.state.category}
                        onChange={this.handleChange}
                        >
                            <MenuItem value="Academic">Academic</MenuItem>
                            <MenuItem value="Dining">Dining</MenuItem>
                            <MenuItem value="Residential">Residential</MenuItem>
                            <MenuItem value="Financial">Financial</MenuItem>
                            <MenuItem value="Health">Health</MenuItem>
                            <MenuItem value="Rec">Rec</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                        <Button disabled={this.state.category === ""? true: false} variant="contained" color="primary">
                            Submit
                        </Button>
                </StartBase>
            </div>    
        )
    };
}    