import React from 'react'
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle'
import "./NotFound.css"

export default function NotFound() {
    return <div className="NotFound">
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <h1>404 NotFound...!</h1>
        </Alert>
    </div>
}