import { IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
      <div className="w-36 md:w-48 pr-4 relative group hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out point cursor-pointer">
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      </div>
    );
  };
  export default MovieCard;
