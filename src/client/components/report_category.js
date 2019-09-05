"use strict";

import React, { Component } from "react";
import styled from "styled-components";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Grid, Button } from '@material-ui/core';



/*************************************************************************/

// const StartBase = styled.div`
//   display: flex;
//   justify-content: center;
//   grid-area: main;
// `;
//@Knowledge should we use styled components like this at all?

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
                <Grid
                    container
                    spacing={2}
                    direction = "column"
                    justify = "space-between"
                    alignItems="center"
                >
                    <Grid item style={{textAlign: "center"}}>
                        <h1>Which category does your complaint belong to?</h1>
                    </Grid>
                    <Grid item>
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
                    </Grid>
                    <Grid item>    
                        <Button disabled={this.state.category === ""? true: false} variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>    
        )
    };
}    