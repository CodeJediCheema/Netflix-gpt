import useNowPlayingMovies from "../custom_hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{

    useNowPlayingMovies();
    
    return <div> 
        {/** Layout
        - Main Container
            -Video in Background
            -Video Title

        - Secondary Container
            -Movie list * n
                - cards * n
         */}
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
};

export default Browse;