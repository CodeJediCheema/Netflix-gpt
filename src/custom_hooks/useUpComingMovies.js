import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpComingMovies = () =>{

    const dispatch = useDispatch();

    const getUpComingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const readableData = await data.json();
        // console.log(readableData.results);

        dispatch(addUpComingMovies(readableData.results));

    }

    useEffect(()=>{
        getUpComingMovies();

    },[]);

};

export default useUpComingMovies;