const VideoCart = (videoDetail) => {

    const {snippet ,statistics} = videoDetail;

    return (
        <div key={videoDetail.id} className="m-3 border border-grey bg-slate-200 w-64 h-64">
            <img 
            className="w-full h-36 rounded-lg object-cover" 
            src={snippet.thumbnails.high.url} 
            alt="Thumbnail"></img>
            <div className="p-3">
                <p className="line-clamp-2">{snippet.localized.title}</p>
                <p className="text-gray-500 text-sm">💿 {snippet.channelTitle}</p>
                <p className="text-gray-500 text-sm">{statistics.viewCount}: views</p>
            </div>
        </div>
    )
};

export default VideoCart;