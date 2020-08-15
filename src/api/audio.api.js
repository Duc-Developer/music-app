import { storage, database } from '../base'

export async function getAllAudioApi() {
    const listDowload = await storage.ref().child("audio/").listAll();
    return listDowload.items.map(async (item) => {
        let url = await item.getDownloadURL()
        let name = await item.getMetadata().then(res => res.name)
        return {
            url: url,
            name: name
        }
    })
}

export function getWishList(userId) {
    return database
        .ref(`users/${userId}`)
        .once("value").then(snapshot => {
            return snapshot.val().wishList   
        })
}