import React from 'react'
import Movie from './Movie'
import axios from "axios"

function UpdateMovie (props) {


    // handleChange

    handleSubmit (event, id) {
        event.preventDefault()
        axios
            .put(`http://localhost:5000/api/movies/${id}`)
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title" 
                value={props.movie.title}
                // onChange={handleChange} 
                />
            <input 
                type="text" 
                placeholder="Director" 
                value={props.movie.director}
                // onChange={handleChange} 
                />
            <input 
                type="text" 
                placeholder="Metascore" 
                value={props.movie.metascore}
                // onChange={handleChange} 
                />
            <input 
                type="text" 
                placeholder="Stars" 
                value={props.movie.stars}
                // onChange={handleChange} 
                />
        </form>
        </>
    )
}

export default UpdateMovie