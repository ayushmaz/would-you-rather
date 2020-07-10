import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAuthedUser } from '../actions/authedUser';
import * as firebase from 'firebase'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateIcon from '@material-ui/icons/Create';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


function ResponsiveDrawer(props) {
    const { window, dispatch } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>

                <Link style={{ textDecoration: 'none', color: "black" }} to="/"><ListItem button>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem></Link>
                <Link style={{ textDecoration: 'none', color: "black" }} to="/add"><ListItem button>
                    <ListItemIcon><CreateIcon /></ListItemIcon>
                    <ListItemText primary="Create Question" />
                </ListItem></Link>
                <Link style={{ textDecoration: 'none', color: "black" }} to="/leaderboard"><ListItem button>
                    <ListItemIcon><AssignmentIcon /></ListItemIcon>
                    <ListItemText primary="LeaderBoard" />
                </ListItem></Link>
                <Link style={{ textDecoration: 'none', color: "black" }} to="/"><ListItem onClick={() => {
                    firebase.auth().signOut().then(function () {
                        alert("Signout Successfull")
                    }).catch(function (error) {
                        // An error happened.
                    });
                    dispatch(logoutAuthedUser())
                }} button>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem></Link>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Would You Rather
                    </Typography>
                    <Typography variant="h6" style= {{position : "fixed" , right : 20}} noWrap>
                        Hello {props.name}
                    </Typography>
                    
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}


class NavBar extends Component {



    render() {

        const { authedUser, users } = this.props
        const username = users[authedUser].name
        return (
            <ResponsiveDrawer name={username} dispatch={this.props.dispatch} />
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(NavBar);