import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from '../utils/const'

const useVideoData = () => {
    const [videos, setVideos] = useState(null);
    // console.log("🚀 ~ useVideoData ~ videos:", videos)

    useEffect(() => { youtubeData()}, [] );

    async function youtubeData() {
        try {
            const data = await  fetch(YOUTUBE_VIDEOS_API);
            const jsonData = await data.json();
            // console.log(jsonData.items);
            setVideos(jsonData.items);
        }
        catch {
            console.log("Server Error")
        };
    };

    return videos;
};

export default useVideoData;
