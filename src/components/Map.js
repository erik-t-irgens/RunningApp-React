import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DetailsCard from './DetailsCard';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    
}));

export default function MapView() {
    const classes = useStyles();
        
    return (
        <div>
            <DetailsCard>
                <Button variant="outlined" color="primary" className={classes.button} >
                    Create
                </Button>
            </DetailsCard>
        </div>
    )
};