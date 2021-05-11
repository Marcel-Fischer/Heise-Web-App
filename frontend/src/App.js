import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [albumData, setAlbumData] = useState([])
  const [editAlbum, setEditAlbum] = useState(null)
  const [editTitleText, setEditTitleText] = useState('')
  const [editArtistText, setEditArtistText] = useState('')
  const [editReleasedYearNumber, setEditRelasedYearNumber] = useState('')
  const baseURL = 'http://localhost:5000/api'

  // Delete album data from database
  const deleteAlbumData = id => {
    axios.delete(`${baseURL}?id=${id}`)
    // Display only the new album data
    const newAlbumData = albumData.filter(album => album.id !== id)
    setAlbumData(newAlbumData)
  }

  // Fetch album data from database
  const fetchAlbumData = () => {
    return axios.get(`${baseURL}`)
      .then(response => {
        return response.data
      })
      .catch(e => {
        console.log('error:', e)
      });
  }

  // Fetch album data only at initial rendering
  useEffect(() => {
    fetchAlbumData().then(albums => {
      setAlbumData(albums)
    })
  }, [])

  const editedAlbumData = {
    'title': `${editTitleText}`,
    'artist': `${editArtistText}`,
    'released_in': editReleasedYearNumber
  }

  // Put edited album data to database
  const editAlbumData = id => {
    axios.put(`${baseURL}?id=${id}`, editedAlbumData)
    // Display the new album Data
    const updatedAlbum = [...albumData].map((album) => {
      if (album.id === id) {
        album.title = editTitleText
        album.artist = editArtistText
        album.released_in = editReleasedYearNumber
      }
      return album
    })
    // Set album Data to zero for next call 
    setAlbumData(updatedAlbum)
    setEditTitleText('')
    setEditArtistText('')
    setEditRelasedYearNumber()
    setEditAlbum(null)
  }

  return (
    <div>
      <div className='app'>
        {albumData.map(album => {
          return <div key={album.id} className='list-group-item list-group-item-action flex-column align-items-start'>
            <div className='d-flex w-100 justify-content-between'>
              {editAlbum === album.id ? (<div>
                <h5>Titel:</h5>
                <input className='input-group-text mb-2' type='text' onChange={e => setEditTitleText(e.target.value)} value={editTitleText} />
              </div>) : (<h5 className='mb-1'>Titel: {album.title}</h5>)}
              <small>
                {editAlbum === album.id ? (<button className='btn btn-outline-secondary' onClick={() => editAlbumData(album.id)}>Speichern</button>) : (<button className='btn btn-outline-secondary' onClick={() => setEditAlbum(album.id)}>Bearbeiten</button>)}
                <button className='btn btn-outline-secondary' onClick={() => { deleteAlbumData(album.id) }}>Löschen</button>
              </small>
            </div>
            {editAlbum === album.id ? (<div>
              <h5>Künstler:</h5>
              <input className='input-group-text mb-2' type='text' onChange={e => setEditArtistText(e.target.value)} value={editArtistText} />
            </div>) : (<h5 className='mb-1'>Künstler: {album.artist}</h5>)}
            {editAlbum === album.id ? (<div>
              <h5>Erscheinungsjahr:</h5>
              <input className='input-group-text' type='number' onChange={e => setEditRelasedYearNumber(e.target.value)} defaultValue={editReleasedYearNumber} />
            </div>) : (<small className='mb-1'>Erscheinungjahr: {album.released_in}</small>)}
          </div>
        })}
      </div>
    </div>
  )
}

export default App
