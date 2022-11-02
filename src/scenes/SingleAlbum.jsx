import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function SingleAlbum(){
    const {albumId} = useParams();
    const [thisAlbum, setThisAlbum] = useState();
    useEffect(()=>{
        fetch('https://albums-api-ee.web.app/albums')
        .then(res=>res.json())
        .then(list => {
            const _thisAlbum = list.message.find(album=> album.albumId === albumId);
            setThisAlbum(_thisAlbum)
            console.log(_thisAlbum)
        })
        .catch(console.error)
    },[albumId]);

    return(
        <>
            <Header title={thisAlbum ? thisAlbum.album: 'Loading ...'}/>
            {
                thisAlbum
                ? <AlbumCard thisAlbum={thisAlbum}/>
                :null
            }
        </>
    )
}