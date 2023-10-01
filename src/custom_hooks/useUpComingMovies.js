import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpComingMovies = () =>{

    const upComingMovies = useSelector(store => store.movies.upComingMovies);

    const dispatch = useDispatch();

    const getUpComingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const readableData = await data.json();
        // console.log(readableData.results);

        dispatch(addUpComingMovies(readableData.results));

    }

    useEffect(()=>{
       !upComingMovies && getUpComingMovies();

    },[]);

};

export default useUpComingMovies;