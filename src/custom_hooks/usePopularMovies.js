import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopularMovies = () =>{

    const dispatch = useDispatch();

    const getPopularMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const readableData = await data.json();
        // console.log(readableData.results);

        dispatch(addPopularMovies(readableData.results));

    }

    useEffect(()=>{
        getPopularMovies();

    },[]);

};

export default usePopularMovies;