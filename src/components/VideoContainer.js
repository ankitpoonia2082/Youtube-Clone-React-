import { useEffect,useState } from "react";
import useVideoData from './utils/gettingVideoData';
import VideoCart from "./VideoCard";
import {Link} from 'react-router-dom'


const VideoContainer = ()=>{
    const videos = useVideoData()
    
    return (
        <div className="flex flex-wrap">
            {videos?.map((videoDetail)=>(
                <Link key={videoDetail.id} to={`/watch?v=`+videoDetail.id}><VideoCart {...videoDetail} /></Link>
            ))}
        </div>
    )
};

export default VideoContainer;