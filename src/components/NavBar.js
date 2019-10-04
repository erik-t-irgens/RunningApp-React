import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// icons
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';
import MenuIcon from '@material-ui/icons/Menu';
import EmojiPeople from '@material-ui/icons/EmojiPeopleOutlined';
import Map from '@material-ui/icons/MapOutlined';
import Grid from '@material-ui/core/Grid';
// Avatar
import Avatar from '@material-ui/core/Avatar';
// For the drawer
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Settings from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles(theme => ({
    bigAvatar: {
        margin: 10,
        width: 120,
        height: 120,
        position: "absolute",
        // zIndex: 0,
        backgroundColor: "#340087",
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    ListItem: {
        width: 300,
    },
    Fab: {
        margin: theme.spacing(1),
        width: "100%",
    },
    button: {
        margin: theme.spacing(1),

    },
    input: {
        display: 'none',
    },
    buttonicons: {
        fontSize: 40,
    },
    hamburger: {
        color: "#878787"
    },
    pair: {
        color: "#bfff00"
    },
    track: {
        color: "#bfff00"
    },
    event: {
        color: "#bfff00"
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },

}));

const NavBar = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem className={classes.ListItem} >
                    <Fab size="large" variant="contained" className={classes.Fab, classes.privacybutton}>
                        Privacy
                    </Fab>
                </ListItem>
                <ListItem className={classes.ListItem} >
                    <Fab size="large" variant="contained" className={classes.Fab, classes.accountbutton}>
                        <Settings className={classes.extendedIcon} /> Account
                    </Fab>
                </ListItem>
                <ListItem className={classes.ListItem} >
                    <Fab size="large" variant="contained" className={classes.Fab, classes.aboutbutton}>
                        About
                    </Fab>
                </ListItem>
                <ListItem className={classes.ListItem} >
                    <Fab size="large" variant="contained" className={classes.Fab, classes.helpbutton}>
                        Help
                    </Fab>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem className={classes.ListItem} >
                    <Fab size="large" variant="contained" className={classes.Fab, classes.logoutbutton}>
                        <ExitToAppIcon className={classes.extendedIcon} />Log Out
                    </Fab>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className="NavBar">
            <Grid container>

                <Avatar alt="Remy Sharp" src={props.children} className={classes.bigAvatar} />

            </Grid>
            <IconButton onClick={toggleDrawer('left', true)} className={classes.button, classes.hamburger} aria-label="add to shopping cart">
                <MenuIcon className={classes.buttonicons} />
            </IconButton>
            <IconButton
                className={classes.button, classes.pair}
                aria-label="upload picture"
                component="span"
            >
                <EmojiPeople className={classes.buttonicons} />
            </IconButton>
            <IconButton className={classes.button, classes.track} aria-label="delete">
                <Map className={classes.buttonicons} />
            </IconButton>

            <IconButton className={classes.button, classes.event} aria-label="Browse events">
                <EventIcon className={classes.buttonicons} />
            </IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>



        </div >
    );
}

export default NavBar;

