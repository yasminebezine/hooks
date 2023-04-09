import { useState } from "react";
import AddMovie from "./component/AddMovie";
import MovieList from "./component/MovieList";


function App() {
  const [movies,setMovies]=useState([{
    id:0,
    title :'casa',
    desc: 'drame',
    photo : 'https://media-mcetv.ouest-france.fr/wp-content/uploads/2018/06/La-Casa-Del-Papel-Un-remake-en-Anglais-est-en-cours-de-pre%CC%81paration-big.jpg',
    rating : 5, 

  }])
  const addMovie =(addmovies) =>{
    setMovies([...movies,addmovies]);
  }
  return (
    <div className="App">
      <MovieList movie={movies}/>
      <AddMovie addmovies={addMovie} /> 
    </div>
  );
}

export default App;
