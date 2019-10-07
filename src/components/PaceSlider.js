import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    margin: {
        height: theme.spacing(3),
    },
}));



function valuetext(value) {
    return `${value} min/mile`;
}


export default function DiscreteSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
                Pace - minutes per mile
      </Typography>
            <Slider
                defaultValue={8}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={.1}
                min={4}
                max={20}
            />

        </div>
    );
}