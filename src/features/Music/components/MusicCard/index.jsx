import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import Alert from '@material-ui/lab/Alert';

import audioAvatar from '../../../../assits/images/music-avatar-image.jpg'
import audioSource from '../../../../assits/audio/Stars Align - The 126ers.mp3'
import { IconButton } from '@material-ui/core';
import { useState } from 'react';

MediaControlCard.propTypes = {
    audioName: PropTypes.string,
    audioUrl: PropTypes.string,
    audioImage: PropTypes.string,
    addWishList: PropTypes.func,
    shareUrl: PropTypes.func,
    changeBluetooth: PropTypes.func
}

MediaControlCard.defaultProps = {
    audioName: "example-Name",
    audioUrl: audioSource,
    audioImage: audioAvatar,
    addWishList: () => { alert("This is demo") },
    changeBluetooth: () => { alert("This is demo") },
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        maxWidth: '250px'
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 24,
        width: 24,
    },
    action: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    alertStyle: {
        maxWidth: "400px"
    }
}));

export default function MediaControlCard(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [share, setShare] = useState(null)
    const {
        audioName,
        audioImage,
        audioUrl,
        addWishList,
        changeBluetooth
    } = props
    const shareUrl = () => {
        setShare(audioUrl)
    }

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {audioName}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <div className={classes.action}>
                        <IconButton aria-label="next" onClick={addWishList}>
                            <FavoriteIcon className={classes.playIcon} />
                        </IconButton>
                        <IconButton aria-label="next" onClick={shareUrl}>
                            <ShareIcon className={classes.playIcon} />
                        </IconButton>
                        <IconButton aria-label="next" onClick={changeBluetooth}>
                            <BluetoothIcon className={classes.playIcon} />
                        </IconButton>
                    </div>
                    <audio src={audioUrl} controls />
                    {share && <Alert
                        className={classes.alertStyle}
                        severity="success"
                        color="info">
                        {share}
                    </Alert>}
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={audioImage}
                title={audioName}
            />
        </Card>
    );
}
