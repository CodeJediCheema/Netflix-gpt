import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const GptMovieSuggestion = () =>{

    const gpt = useSelector(store => store.gpt);
    const {movieNames, movieResults} = gpt;
    if (!movieNames) return null;
    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-75">

            {movieNames.map((moviename, index) => <MovieList key={moviename} title={moviename} movies={ movieResults[index]}/> )}

            

        </div>
    )
};

export default GptMovieSuggestion;