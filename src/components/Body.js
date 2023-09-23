import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";


const Body = () =>{

    

    const appRoute = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/error",
            element:<Error/>
        }
    ]);




    return <div>
        <RouterProvider router={appRoute}/>

    </div>
};

export default Body;