import React, { useEffect, useRef, useState } from 'react';
import MovieList from '../components/MovieList';

const Home = () => {
      const [movies ,setMovies] = useState([]);
      const inputRef = useRef() 
      console.log(inputRef)

    const fetchMovie = async (query)=>{

      const Link = process.env.REACT_APP_LINK; 

      console.log("Env URL :" , Link)
     
           const URl = `${Link}&s=${query}`

   console.log(URl)
        const res = await fetch(URl);
        const data = await res.json();
        console.log(data)
        setMovies(data.Search || [] )
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      const query = inputRef.current.value.trim();
      // console.log(query)
      if(query) fetchMovie(query)
    }


    useEffect(()=>{
        fetchMovie()
    }, [])
    return (
        
    <div className="home">
        <form onSubmit={handleSubmit}>
          <input 
          ref = {inputRef}
          className="searchInput"
           placeholder="Search for a movie..."
            />
          <button type="submit">Search 🔎</button>
        </form>
       <MovieList movies={movies}/>
      </div>
    );
}

export default Home;
