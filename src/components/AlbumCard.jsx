import { Link } from 'react-router-dom';

export default function AlbumCard({ thisAlbum, setAlbums }) {
    const getAlbums = () =>{
        fetch(process.env.REACT_APP_ENDPOINT+'/albums')
        .then(res=>res.json())
        .then(res=>setAlbums(res))
        .catch(console.error)
    }
    const deleteAlbum = () => {
        fetch(process.env.REACT_APP_ENDPOINT+'/albums/delete', {
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
                    <p>{thisAlbum.artist}</p>
                    <p>{thisAlbum.year}</p>
            </Link>
                    <button onClick={deleteAlbum}>Delete</button>
                </div>
        </>
    )
}