import { LOGO_URL, USER_ICON } from "../utils/constants";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    
    

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




    return <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between"> 
        <div className="w-44 mx-4 my-2 shadow-md">
            <img src={LOGO_URL} alt="logo" />
        </div>
       { user && (<div className="flex p-6">
            <img  className= "w-10 h-10" src={USER_ICON} alt="user icon"/>
            <button onClick={handleSignOut} className="bg-gradient-to-b from-red-500
             to-red-700 hover:from-red-700 hover:to-red-500
              text-white font-bold ml-2
               hover:text-white hover:shadow-md rounded-lg py-2 
               px-4 transition-all duration-300 ease-in-out">
                Sign Out
                </button>

        </div>)
        }
    </div>
};

export default Header;