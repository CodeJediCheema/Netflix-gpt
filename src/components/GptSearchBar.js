import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants"
import openai from "../utils/openAI"
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import {addGptMovieResult} from "../utils/gptSlice"



const GptSearchBar = () =>{

    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        return json.results;
    }

    
    const gptQuery = `Act as a movie recommendation system and suggest some movies 
    for the query: ${searchText?.current?.value}. Only give me names of 5 movies
    , comma seperated like the example result given ahead. Example result: Gadar, Golmal, Don, Koi Mil Gaya, Sholay`

    const handleGptSearchClick = async () =>{
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
          });

          const gptMovies = gptResult?.choices?.[0]?.message?.content.split(",");
          console.log(gptMovies);

          const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
          

          const tmdbResults = await Promise.all(promiseArray);
          console.log(tmdbResults);
          dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
          
    };

   
    const langKey = useSelector((store) => store.config.lang)
    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
            <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=> e.preventDefault()}>

                {/* Here lang.langKey won't work because lang file doesnot contain anything named langkey
                therefore to  make it dynamic we have to use lang[langkey] */}

                <input ref={searchText} type="text" placeholder={lang[langKey].gptSearchPlaceholder} className=" p-4 m-4 col-span-9 rounded-lg"/>

                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
            </form>

        </div>
    )
};

export default GptSearchBar;