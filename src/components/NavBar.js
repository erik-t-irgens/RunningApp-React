import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EmojiPeople from '@material-ui/icons/EmojiPeopleOutlined';
import Map from '@material-ui/icons/MapOutlined';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
    bigAvatar: {
        margin: 10,
        width: 120,
        height: 120,
        position: "absolute",
        zIndex: 0,
        backgroundColor: "#340087",
    },
    button: {
        margin: theme.spacing(3),
    },
    input: {
        display: 'none',
    },
    buttonicons: {
        fontSize: 50,
        color: "#bfff00"
    }
}));

const NavBar = (props) => {
    const classes = useStyles();
    return (
        <div className="NavBar">
            <Grid container justify="left" alignItems="left">

                <Avatar alt="Remy Sharp" src={props.children} className={classes.bigAvatar} />
            </Grid>
            <IconButton
                className={classes.button}
                aria-label="upload picture"
                component="span"
            >
                <EmojiPeople className={classes.buttonicons} />
            </IconButton>
            <IconButton className={classes.button} aria-label="delete">
                <Map className={classes.buttonicons} />
            </IconButton>

            <IconButton className={classes.button} aria-label="add an alarm">
                <AlarmIcon className={classes.buttonicons} />
            </IconButton>
            <IconButton className={classes.button} aria-label="add to shopping cart">
                <AddShoppingCartIcon className={classes.buttonicons} />
            </IconButton>



        </div >
    );
}

export default NavBar;

