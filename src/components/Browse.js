import useNowPlayingMovies from "../custom_hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../custom_hooks/usePopularMovies";
import useTopRatedMovies from "../custom_hooks/useTopRatedMovies"
import useUpComingMovies from "../custom_hooks/useUpComingMovies";
import useTvShows from "../custom_hooks/useTvShows";
import useTopPicks from "../custom_hooks/useTopPicks";

const Browse = () =>{

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    useTvShows();
    useTopPicks();
    
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