import {useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useEffect } from "react";
import { useLocation } from "react-router";



const WatchPage = () => {
    let { state } = useLocation();
    console.log("🚀 ~ WatchPage ~ state:", state)
    const dispatch = useDispatch()

    useEffect(()=>{
        Menu: dispatch(closeMenu())
    },[])
    
    return (
        <div className="w-full m-10 items-center">
            <iframe className="rounded-xl" 
            width="700" height="400" 
            src={`https://www.youtube.com/embed/`+state.id}
            // src={`https://www.youtube.com/watch?v=`+state.id}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>
        </div>
    )
};

export default WatchPage;