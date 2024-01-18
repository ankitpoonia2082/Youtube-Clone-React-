import { useEffect,useState } from "react";
import useVideoData from './utils/gettingVideoData';
import VideoCart from "./VideoCard";
import {Link} from 'react-router-dom'
import ShimmerCard from "./ShimmerVideoContainer";


const VideoContainer = ()=>{
    const videos = useVideoData()
    // console.log("🚀 ~ VideoContainer ~ videos:", videos)
    
    return (!videos) ? <ShimmerCard />: (
        <div className="flex flex-wrap">
            {videos?.map((videoDetail)=>(
                <Link 
                key={videoDetail.id} 
                state={{ id: videoDetail.id }}
                to={`/watch`}>
                <VideoCart {...videoDetail} />
                </Link>
            ))}
        </div>
    )
};

export default VideoContainer;