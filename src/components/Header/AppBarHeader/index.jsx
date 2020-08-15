import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 1rem 0 1rem"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "2em"
  },
}));

export default function AppBarHeader() {
  const classes = useStyles();
  const history = useHistory();
  const localUserId = localStorage.getItem("userId")
  const sessionUserId = sessionStorage.getItem("userId")
  const user = useSelector(state => state.auth)

  const handleLogOut = () => {
    localStorage.removeItem("userId")
    sessionStorage.removeItem("userId")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button
            color="inherit"
            className={classes.title}
            onClick={() => { history.push("/home") }} >
              Home
            </Button>
          {(!localUserId && !sessionUserId) && <Button
            color="inherit"
            onClick={() => { history.push("/auth/login") }}
          >Login</Button>}
          {(localUserId || sessionUserId) && <MenuItem>
            <Typography
              color="textPrimary"
              variant="h6">
              Hi {user.lastName}!
           </Typography>
            <Button
              color="inherit"
              href="/"
              onClick={handleLogOut}>
              Log Out
           </Button>
          </MenuItem>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
