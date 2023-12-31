import { LOGO_URL, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { clearGptMovieResults, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
    
    

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            
        }).catch((error) => {
            // An error happened.
            navigate("/error");
            
          });

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // This is executed whenever my user sign in or sign up
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid , email: email , displayName: displayName, photoURL: photoURL}));
              navigate("/browse");
              
              
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
          });
          
        // Unsubscribe when Component Unmounts

          return () => unsubscribe();

    },[]);

    const handleGptSearchClick = () =>{
      // Toggle
      dispatch(toggleGptSearchView());
      dispatch(clearGptMovieResults());
    };

    const handleLanguageChange = (e) =>{
      // console.log(e.target.value);
      dispatch(changeLanguage(e.target.value));

    }




    return <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between"> 

            <img  className= "w-44 mx-auto md:mx-0"src={LOGO_URL} alt="logo" />
      


       { user && ( <div className="flex p-1 md:p-3 justify-between">

          { showGptSearch && 
            <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              
              
            </select>}


            <button className=" mx-2 bg-gradient-to-b from-purple-600
             to-purple-700 hover:from-purple-700 hover:to-purple-500
              text-white font-semibold ml-2
               hover:text-white hover:shadow-md rounded-lg py-2 
               px-4 transition-all duration-300 ease-in-out m-2  md:m-0"
                onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}
                
                </button>

            <img  className= "hidden md:block w-10 h-10 ml-1 mr-2" src={USER_ICON} alt="user icon"/>

            <button onClick={handleSignOut} className="bg-gradient-to-b from-red-500
             to-red-700 hover:from-red-700 hover:to-red-500
              text-white font-bold ml-2
               hover:text-white hover:shadow-md rounded-lg py-2 
               px-4 transition-all duration-300 ease-in-out m-2 md:m-0">
                Logout
                </button>

        </div>)
        }
    </div>
};

export default Header;