import React, { useState } from 'react'

const AddMovie = ({addmovies}) => {
    const [title,setTitle]=useState ("");
    const [desc,setDesc]=useState ("");
    const [photo,setPhoto]=useState ("");
    const [rating,setRating]=useState ("");
    

  return (
    <div>
        <form>
            <div>
                <label>title</label>
                <input type='text' 
                onChange={(e) => setTitle(e.target.value)}
                value={title}/>
            </div>
            <div>
            <label>description</label>
                <input type='text' 
                onChange={(e) => setDesc(e.target.value)}
                value={desc}/> 
            </div>
            <div>
                <label>photo</label>
                <input type='text' 
                    onChange={(e) => setPhoto(e.target.value)}
                    value={photo}/>
                </div>
            <div>
                <label>rating</label>
                <input type='number'
                 onChange={(e) => setRating(e.target.value)}
                 value={rating}/> 
            </div>
        </form>
    </div>
  )
}

export default AddMovie