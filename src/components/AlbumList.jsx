import { useEffect, useState } from 'react';
import AlbumCard from '../components/AlbumCard';

export default function AlbumList() {
    const [albums, setAlbums] = useState();
    
    useEffect(()=>{
        fetch('https://albums-api-ee.web.app/albums')
        .then(res=>res.json())
        .then(setAlbums)
        .catch(console.error)
    },[]);

    return (
        <>
            <main className="album-list">
                {
                    !albums
                    ? <h2>Loading...</h2>
                    :albums.message.map(album => (
                        <AlbumCard key={album.albumId} thisAlbum={album} setAlbums={setAlbums}/>
                    ))
                }
            </main>
        </>
    )
}