
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const SecondaryContainer = () =>{
    const movies = useSelector(store => store.movies)
    return (
        movies.nowPlayingMovies && (
          <div className="bg-black">
            <div className=" mt-0 md:-mt-40 pl-4 md:pl-4 relative z-20">
              <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
              <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
              <MovieList title={"Tv Shows"} movies={movies.TvShows} />
              <MovieList title={"Popular"} movies={movies.PopularMovies} />
              <MovieList title={"Top Picks for You"} movies={movies.TopPicks} />
              <MovieList title={"UpComing"} movies={movies.upComingMovies} />
            </div>
          </div>
        )
      );
    };
    
export default SecondaryContainer;