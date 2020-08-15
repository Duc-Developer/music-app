import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getWishList, getAllAudioApi } from '../../../../api/audio.api';
import imageDefault from '../../../../assits/images/music-avatar-image.jpg'
import './WishListPage.css'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function WishListPage() {

    const [listMatched, setMatched] = useState([])
    const classes = useStyles();
    const ID = localStorage.getItem("userId") || sessionStorage.getItem("userId")

    useEffect(() => {
        async function findData() {
            let audioData = []
            // Lấy wishData về
            let wishData = await getWishList(ID).then(res => res)
            let audioListPomise = await getAllAudioApi().then(data => data)
            // lấy dữ liệu audio về
            function getAudioData() {
                return audioListPomise.map(async item => {
                    let audio = await item.then(res => res)
                    return audio
                })
            }
            for await (let item of getAudioData()) {
                audioData.push(item)
            }
            // trả về đầy đủ dữ liệu tương ứng với wishData
            let matched = audioData.filter(item => {
                return wishData.indexOf(item.name) !== -1
            })
            setMatched(matched)
        }
        findData()
    }, [])

    return <div className="WishListPage">
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell>Name Album</TableCell>
                        <TableCell align="center">Play</TableCell>
                        <TableCell align="center">Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        listMatched &&
                        listMatched.map((item, index) => {
                            return <TableRow key={index}>
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">
                                    <audio src={item.url} controls />
                                </TableCell>
                                <TableCell align="center">
                                    <img src={imageDefault} className="image-default-music-wish" />
                                </TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}