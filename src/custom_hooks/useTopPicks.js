import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopPicks } from "../utils/movieSlice";


const useTopPicks = () =>{

    const dispatch = useDispatch();

    const topPicks = useSelector(store => store.movies.TopPicks);

    const getTopPicks = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS);
        const readableData = await data.json();
        // console.log(readableData.results);

        dispatch(addTopPicks(readableData.results));

    }

    useEffect(()=>{
       !topPicks && getTopPicks();

    },[]);

};

export default useTopPicks;