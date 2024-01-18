const YOUR_API_KEY = `AIzaSyCCl-Bbuvnm3VA3sux871AZ2lBHhF-r5sM`;

export const YOUTUBE_VIDEO = `curl \
'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&key=[YOUR_API_KEY]' \
--header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
--header 'Accept: application/json' \
--compressed`
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&key=`+YOUR_API_KEY;
