import { BACKGROUND_IMG } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


const GptSearch = () =>{
    return (
        <>
        <div className="fixed -z-10">
                <img className="h-screen object-cover md:h-full" alt="netflix background" src={BACKGROUND_IMG}/>

            </div>
            <div className="pt-[10%] md:pt-0">
                <GptSearchBar/>
                <GptMovieSuggestion/>

            </div>
        
        </>
        
            
           
        
    );
};

export default GptSearch;