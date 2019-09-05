"use strict";
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green, orange } from "@material-ui/core/colors";

export const Theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green
    },
    status: {
        danger: orange
    }
});