import React from 'react'
import logoApp from "../../../assits/images/Apple-logo.png"
import "./TopHeader.css"
import { useHistory } from 'react-router-dom'
import { Link } from '@material-ui/core'


export default function TopHeader() {

    const history = useHistory()
    const handleOnClickMusic = () => {
        history.push("/home/music")
    }
    const handleOnClickLogo = () => {
        history.push("/home")
    }
    const handleAlertDefault = () => {
        alert("Sorry this feature is not complete. Please try again with Music page!")
    }

    return <div className="TopHeader" id="back-to-top-anchor">
        <div className="logo-app-wrap">
            <div className="logo-app-music">
                <img src={logoApp} onClick={handleOnClickLogo} alt="logo-app-music" />
            </div>
        </div>
        <div className="top-header-link-wrap">
            <div className="top-header-link">
            <Link
                    onClick={handleAlertDefault}
                    component="button"
                    color="inherit"
                    variant="h5">
                    Mac
                    </Link>
            </div>
            <div className="top-header-link">
            <Link
                    onClick={handleAlertDefault}
                    component="button"
                    color="inherit"
                    variant="h5">
                    iPad
                    </Link>
            </div>
            <div className="top-header-link">
            <Link
                    onClick={handleAlertDefault}
                    component="button"
                    color="inherit"
                    variant="h5">
                    iPhone
                    </Link>
            </div>
            <div className="top-header-link">
            <Link
                    onClick={handleAlertDefault}
                    component="button"
                    color="inherit"
                    variant="h5">
                    Watch
                    </Link>
            </div>
            <div className="top-header-link">
            <Link
                    onClick={handleAlertDefault}
                    component="button"
                    color="inherit"
                    variant="h5">
                    TV
                    </Link>
            </div>
            <div
                className="top-header-link">
                <Link
                    component="button"
                    color="inherit"
                    onClick={handleOnClickMusic} 
                    variant="h5">
                    Music
                    </Link>
            </div>
            <div className="top-header-link">
            <Link
                    onClick={handleAlertDefault}
                    component="button"
                    color="inherit"
                    variant="h5">
                    Support
                    </Link>
            </div>
        </div>

    </div>
}