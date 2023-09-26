import { BACKGROUND_IMG } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


const GptSearch = () =>{
    return (
        <div>
            <div className="fixed -z-10">
                <img alt="netflix background" src={BACKGROUND_IMG}/>

            </div>
            <div>
                <GptSearchBar/>
                <GptMovieSuggestion/>

            </div>
        </div>
    );
};

export default GptSearch;