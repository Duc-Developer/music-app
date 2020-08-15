import React, { useState, useEffect } from 'react'
import { storage } from '../../../../base'
import { useForm } from "react-hook-form";
import { Input, Button, Container, Grid } from '@material-ui/core';
import { getAllAudioApi } from '../../../../api/audio.api'
import MediaControlCard from '../../components/MusicCard';
import { useHistory } from 'react-router-dom';
import audioContants from '../../../../constants/audio.contants'
import { useDispatch } from 'react-redux';
import './MyAlbumPage.css'

export default function MyAlbumPage() {

    const history = useHistory()
    const dispatch = useDispatch()
    const [listAudio, setListAudio] = useState()
    const { register, handleSubmit } = useForm();
    const { ADD_WISH_LIST } = audioContants

    const onSubmit = data => {
        const audio = data.audio[0]
        console.log(data.audio[0])
        if (audio.type !== "audio/mpeg") {
            alert("Your file do not supported with page. Please sure your file is .mp3!")
            return
        }
        storage.ref(`audio/${audio.name}`).put(audio);
        alert(`file ${audio.name} upload successful!`)
    };

    const handleAddWishList = (name) => {
        const userIdChoice =
            sessionStorage.getItem("userId")
            || localStorage.getItem("userId")
        dispatch({
            type: ADD_WISH_LIST,
            payload: {
                audio: name,
                userId: userIdChoice
            }
        })
    }

    useEffect(() => {

        let result = []
        async function getData() {
            const list = await getAllAudioApi()
            for (var i = 0; i < list.length; i++) {
                let item = await list[i].then(res => res)
                result.push(item)

            }
            setListAudio(result)
        }
        getData()

    }, [])

    return <div className="MyAlbumPage">
        <h1>MY ALBUM</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="my-form-upload-audio">
            <Input type="file" name="audio" inputRef={register} />
            <Button
                variant="contained"
                color="primary"
                type="submit">
                Upload
            </Button>
        </form>
        <Container className="list-audio-my-album">
            <div>
                <Grid container spacing={2}>
                    {listAudio && listAudio.map((item, index) => {
                        return <Grid
                            item xs={12}
                            key={index}
                            className="audio-wrap"
                            sm={6}>
                            <MediaControlCard
                                audioName={item.name}
                                audioUrl={item.url}
                                addWishList={() => handleAddWishList(item.name)}
                            />
                        </Grid>
                    })}
                </Grid>

            </div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => { history.goBack() }}>
                Back
                </Button>
        </Container>
    </div>
}