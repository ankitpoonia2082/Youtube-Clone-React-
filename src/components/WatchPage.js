import {useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useEffect } from "react";
import { useParams } from "react-router";

const WatchPage = () => {
    const {id} = useParams()
    console.log("🚀 ~ WatchPage ~ id:", id)

    // const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(toggleMenu());
    // },[])
    

    return (
        <div className="w-full">
            <iframe title="youtube" className="rounded-xl w-3/4 h-96 aspect-[4/3] m-5" src={"https://www.youtube.com/watch?v="+id}></iframe>
        </div>
    )
};

export default WatchPage;