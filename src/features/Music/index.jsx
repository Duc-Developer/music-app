import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AlbumIcon from '@material-ui/icons/Album';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import { useHistory, useRouteMatch } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        margin: "0 1rem 1rem 1rem",
    },
    listHover: {

    },
    iconStyle1: {
        fontSize: "120px",
        color: "#4169E1"
    },
    iconStyle2: {
        fontSize: "120px",
        color: "#DC143C"
    },
    iconStyle3: {
        fontSize: "120px",
        color: "#FFD700"
    },
}));


export default function SimpleList() {
    const classes = useStyles();
    const history = useHistory()
    const match = useRouteMatch()

    useEffect(function checkData() {
        let localUserId = localStorage.getItem("userId")
        let sessionUserId = sessionStorage.getItem("userId")
        if(!localUserId && !sessionUserId) {
            history.push("/")
        }
    }, [])
    
    return (
        <div className={classes.root}>
            
            <List component="nav">
                <ListItem 
                button={true} 
                onClick={() => {history.push(`${match.url}/my-album`)}}
                divider={true}>
                    <ListItemIcon >
                        <AlbumIcon className={classes.iconStyle1} />
                    </ListItemIcon>
                    <ListItemText >
                        <h1>MY ALBUM</h1>
                    </ListItemText>
                </ListItem >
                <ListItem 
                button 
                onClick={() => {history.push(`${match.url}/wish-list`)}}
                divider={true}>
                    <ListItemIcon>
                        <SkipNextIcon className={classes.iconStyle2} />
                    </ListItemIcon>
                    <ListItemText >
                        <h1>FOR YOU</h1>
                    </ListItemText>
                </ListItem>
                <ListItem 
                button 
                onClick={() => {alert("Sorry this page do not complete!")}}
                divider={true}>
                    <ListItemIcon>
                        <LibraryMusicIcon className={classes.iconStyle3} />
                    </ListItemIcon>
                    <ListItemText >
                        <h1>MUSIC LIBRARY</h1>
                    </ListItemText>
                </ListItem>
            </List>

        </div>
    );
}