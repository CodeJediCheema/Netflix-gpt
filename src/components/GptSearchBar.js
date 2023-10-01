import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openAI";
import { useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import Error from "./Error"
import LoadingShimmer from "./LoadingShimmer";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  
  const [isLoading, setIsLoading] = useState(false);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    setIsLoading(true); // Set loading state to true when fetching data

    const gptQuery = `Act as a movie recommendation system and suggest some movies 
        for the query: ${searchText?.current?.value}. Only give me names of 5 movies
        , comma separated like the example result given ahead. Example result: Gadar, Golmal, Don, Koi Mil Gaya, Sholay`;

    try {
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const gptMovies = gptResult?.choices?.[0]?.message?.content.split(",");
      console.log(gptMovies);

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );

    } catch (error) {
      <Error/>
    } 
    finally {
      setIsLoading(false); // Set loading state to false when data fetching is complete
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 rounded-lg"
        />

        <button
          className="col-span-3 m-4 py-2 px-2 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
          disabled={isLoading} // Disable the button while loading
        >
          {lang[langKey].search}
        </button>
      </form>

      {/* Conditional rendering of loading screen or results */}
      {isLoading ? (
        <LoadingShimmer/>
      ) : (
        
        <div></div>
      )}
    </div>
  );
};

export default GptSearchBar;
