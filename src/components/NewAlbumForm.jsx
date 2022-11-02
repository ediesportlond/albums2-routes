import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const blankAlbum = {
    album: '',
    artist: '',
    year: 2000
}

export default function NewAlbumForm() {

    const [formData, setFormData] = useState(blankAlbum);
    const navigate = useNavigate();
    
    const handleFormChange = (e) => {
        e.preventDefault();
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    
    const clear = (e) => {
        e.preventDefault();
        if(formData.album === ''|| formData.artist === ''){
            alert("Complete all fields before saving")
            return;
        }
        setFormData(blankAlbum);
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch(process.env.REACT_APP_ENDPOINT+'/albums', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(()=>{
            navigate('/')
        })
        .catch(console.error)
    }
    return (
        <>
            <main className="new-album">
                <form action="" onSubmit={handleFormSubmit}>
                    <label htmlFor="album">Album Name: 
                    </label>
                    <input required type="text" name='album' value={formData.album} onChange={handleFormChange}/>
                    <br />
                    <label htmlFor="artist"> Artist: 
                    </label>
                    <input required type="text" name='artist' value={formData.artist} onChange={handleFormChange}/>
                    <br />
                    <label htmlFor="year">Year: 
                    </label>
                    <input required type="number" name='year' value={formData.year} onChange={handleFormChange}/>
                    <br />
                    <button onClick={clear}>Reset</button>
                    <input type="submit" value="Add New Album" />
                </form>
            </main>
        </>
    )
}