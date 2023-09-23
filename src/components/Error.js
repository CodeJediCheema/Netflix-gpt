import { BACKGROUND_IMG } from "../utils/constants";


const Error = () => {
    return (
      <div
        className="flex justify-center items-center h-screen relative"
        style={{
          backgroundImage: `url(${BACKGROUND_IMG})`,
          backgroundSize: "cover",
        }}
      >
        
        <div className="absolute inset-0 bg-black opacity-50" />
  
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-bold text-red-700 mb-4">
            Oops! Something went wrong.
          </h1>
          <p className="text-xl text-gray-300">
            We apologize for the inconvenience. Please try again later.
          </p>
        </div>
      </div>
    );
  };
  

export default Error;