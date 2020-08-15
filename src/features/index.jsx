import React, { Suspense } from 'react'
import { Route, useRouteMatch, useHistory } from 'react-router-dom'
import Loading from '../components/Loading'
import { Switch } from 'react-router-dom'
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import { Button, makeStyles } from '@material-ui/core';
import WishListPage from './Music/pages/WishListPage';


const rootMusic = React.lazy(() => import('./Music'))
const MyAlbumPage = React.lazy(() => import('./Music/pages/MyAlbumPage'))

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        margin: "0 1rem 0 1rem",
        alignItems: "center",
        backgroundColor: "#252424"
    },
    flex1: {
        flexGrow: 1,
        color: "white"
    },
    flex2: {
        flexGrow: 2,
        color: "white"
    }
}) )

export default function Home() {

    const match = useRouteMatch()
    const history = useHistory()
    const classes = useStyles()


    return <div className="Home">
        <Suspense fallback={<Loading />} >
            <div className={classes.root}>
                <MusicVideoIcon style={{
                    fontSize: "100px",
                }} className={classes.flex1} />
                <div className={classes.flex2}>
                    <h2>LOSE YOUR SELF IN 60 MILLION SONGS </h2>
                </div>
                <div className={classes.flex1}>
                <Button
                    variant="outlined"
                    size="large"
                    color="inherit"
                    onClick={() => {history.push("/auth/register")}}
                >
                   TRY IT FOR FREE!
                </Button>
                </div>
                
            </div>
            <Switch>
                <Route exact path={`${match.url}/music`} component={rootMusic} />
                <Route exact path={`${match.url}/music/my-album`} component={MyAlbumPage} />
                <Route exact path={`${match.url}/music/wish-list`} component={WishListPage} />
            </Switch>
        </Suspense>
    </div>
}