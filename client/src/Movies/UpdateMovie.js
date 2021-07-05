import React, {useState} from 'react'
import axios from "axios"

function UpdateMovie (props) {
    const [movie, setMovie] = useState({
        id: "",
        title: "",
        director:"",
        metascore: "",
        stars: []
    })

    const handleChange = (event) =>{
        setMovie({
            ...movie,
            id: props.match.params.id,
            [event.target.name]: event.target.value,
            
            
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:5000/api/movies/${props.match.params.id}`, movie)
            .then(res=>{
                console.log(res)
                props.history.push(`/`) 
            })
            .catch(err=>{
                console.log(err)
            })
    }

    // fetchMovie = id => {
    //     axios
    //       .get(`http://localhost:5000/api/movies/${id}`)
    //       .then(res => this.setState({ movie: res.data }))
    //       .catch(err => console.log(err.response));
    //   };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title" 
                name="title"
                value={movie.title}
                onChange={handleChange} 
                />
            <input 
                type="text" 
                placeholder="Director" 
                name="director"
                value={movie.director}
                onChange={handleChange} 
                />
            <input 
                type="text" 
                placeholder="Metascore"
                name="metascore" 
                value={movie.metascore}
                onChange={handleChange} 
                />
            <input 
                type="text" 
                placeholder="Stars" 
                name="stars"
                value={movie.stars}
                onChange={handleChange} 
                />
            <button type="submit" className="save-button">Update</button>
        </form>
        </>
    )
}

export default UpdateMovie