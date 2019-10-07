import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// icons
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PersonIcon from '@material-ui/icons/Person';
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
import HelpOutline from '@material-ui/icons/HelpOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import { hidden } from 'ansi-colors';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    bigAvatar: {
        margin: 10,
        width: 120,
        height: 120,
        position: 'relative',
        // zIndex: 0,
        backgroundColor: "#340087",
    },
    list: {
        width: 250,
        backgroundColor: "#19242b",
        height: '100%',
        overflow: 'hidden',
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
        color: 'white',
    },
    button: {
        margin: theme.spacing(2),
    },
    paragraph: {
        color: "#878787",
        position: 'sticky',
        top: '100%',
        bottom: 0,
        marginLeft: '25%',
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
    you: {
        color: "#bfff00"
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
                <Grid container>
                    <Avatar src='https://picsum.photos/200/200/?blur=5' className={classes.bigAvatar}>{props.children}</Avatar>
                </Grid>
                <Divider />
                <ListItem className={classes.ListItem} >
                    <Button variant="outlined" color="primary" className={classes.button, classes.Fab, classes.accountbutton}>
                        <Settings className={classes.extendedIcon} /> Account
                    </Button>
                </ListItem>
                <ListItem className={classes.ListItem} >
                    <Button variant="outlined" color="primary" className={classes.button, classes.Fab, classes.aboutbutton}>
                        <HelpOutline className={classes.extendedIcon} /> About
                    </Button>
                </ListItem>
                <ListItem className={classes.ListItem} >
                    <Button variant="outlined" color="primary" className={classes.button, classes.Fab, classes.helpbutton}>
                        <ErrorOutlineIcon className={classes.extendedIcon} /> Help
                    </Button>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem className={classes.ListItem} >
                    <Button variant="outlined" color="primary" className={classes.button, classes.Fab, classes.logoutbutton}>
                        <ExitToAppIcon className={classes.extendedIcon} />Log Out
                    </Button>
                </ListItem>
                <ListItem className={classes.ListItem} >
                    <Button variant="outlined" color="primary" className={classes.button, classes.Fab, classes.privacybutton}>
                        <LockOpenIcon className={classes.extendedIcon} />  Privacy
                    </Button>
                </ListItem>
            </List>
            <p className={classes.paragraph}>&#169; RalliRun - 2019</p>
        </div>
    );

    return (
        <div className="NavBar">

            <IconButton onClick={toggleDrawer('left', true)} className={classes.button, classes.hamburger} aria-label="add to shopping cart">
                <MenuIcon className={classes.buttonicons} />
            </IconButton>
            <Link to="/app/user/settings" replace>
                <IconButton
                    className={classes.button, classes.you}
                    aria-label="you">
                    <PersonIcon className={classes.buttonicons} />
                </IconButton>
            </Link>
            <Link to="/app/user" replace>
                <IconButton
                    className={classes.button, classes.pair}
                    aria-label="users">
                    <DirectionsRunIcon className={classes.buttonicons} />
                </IconButton>
            </Link>

            <Link to="/app/track" replace>
                <IconButton className={classes.button, classes.track} aria-label="Tracks">
                    <Map className={classes.buttonicons} />
                </IconButton>
            </Link>
            <Link to="/app/event" replace>
                <IconButton className={classes.button, classes.event} aria-label="Browse events">
                    <EventIcon className={classes.buttonicons} />
                </IconButton>
            </Link>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>



        </div >
    );
}

export default NavBar;

