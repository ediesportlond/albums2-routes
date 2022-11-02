import Header from '../components/Header';
import NewAlbumForm from '../components/NewAlbumForm';
import { Link } from 'react-router-dom';

export default function AddAlbum() {
    return (
        <>
            <Header title={'Add New Album'} />
            <Link to='/'>&lt; Go back</Link>
            <NewAlbumForm />
        </>
    )
}