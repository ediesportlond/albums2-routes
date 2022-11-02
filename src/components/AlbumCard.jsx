import { Link } from 'react-router-dom';

export default function AlbumCard({ thisAlbum, setAlbums }) {
    const getAlbums = () =>{
        fetch('https://albums-api-ee.web.app/albums')
        .then(res=>res.json())
        .then(res=>setAlbums(res))
        .catch(console.error)
    }
    const deleteAlbum = () => {
        fetch(`https://albums-api-ee.web.app/albums/delete`, {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id:thisAlbum.albumId})
        })
        .then(getAlbums)
        .catch(console.error)
    }
    return (
        <>
                <div className="album-card">
            <Link to={`/albums/${thisAlbum.albumId}`} >
                    <h3 className="album-title">{thisAlbum.album}</h3>
            </Link>
                    <p>{thisAlbum.artist}</p>
                    <p>{thisAlbum.year}</p>
                    <button onClick={deleteAlbum}>Delete</button>
                </div>
        </>
    )
}