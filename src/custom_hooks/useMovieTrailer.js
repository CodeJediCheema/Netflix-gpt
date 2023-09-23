import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) =>{

    
    const dispatch = useDispatch();

    

    const getMoviesVideos = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        const filterData = json.results.filter((movie) => movie.type === "Trailer");
        // If the filteredData does not have a trailer, then I will display the first video
        const trailer = filterData.length ? filterData[0] : json.results[0]
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
        
    }

    useEffect(()=>{
        getMoviesVideos();

    },[]);


}

export default useMovieTrailer;