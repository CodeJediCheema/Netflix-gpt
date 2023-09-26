import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer = () =>{

    const movies = useSelector((store)=> store?.movies?.nowPlayingMovies);

    if(!movies) return; // when movies ===  null
    // let x = Math.floor((Math.random() * 19));
    const mainMovie = movies[2];

    const {original_title, overview, id } = mainMovie;
    
    return(
        <div className="pt-[30%] bg-black md:pt-0"> 
            <VideoTitle title = {original_title} overview = {overview}/>
            <VideoBackground movieId = {id}/>
        </div>
    )
};

export default MainContainer;