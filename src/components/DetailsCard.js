import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '90%',
        maxHeight: '90vh',
        display: "inline-block",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 30,
        backgroundColor: "#151d22",
        color: "white",
        border: '1px solid #340087'

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function (props) {
    const classes = useStyles();
    return (

        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="body2" color="white" >
                        {props.children}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}