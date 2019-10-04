import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        width: 345,
        height: 350,
        display: "inline-block",
        marginLeft: 30,
        marginTop: 30,
        backgroundColor: "#151d22",
        color: "white"
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
            {props.items.map((items, id) =>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label={items.value} className={classes.avatar}>
                                image={items.imagedisplay}
                            </Avatar>
                        }
                        title={items.Title}
                    />
                    <CardMedia
                        className={classes.media}
                        image={items.imagedisplay}
                        title={items.Title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="white" component="p">
                            {items.Description}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}