import { toggleMenu } from "./utils/appSlice";
import {useSelector } from "react-redux";
import { Store } from "./utils/store";
import { Link } from "react-router-dom";

const SideBar = () => {

    const toggle = useSelector((store)=>store.app.ismenuOpen);

    return (toggle)?(
        <div className="border border-black p-3 col-span-1 scroll-snap-none">       
            <div className="border-b border-red-600">
                <Link to={`/`}>Home</Link>
                <h1>Shorts</h1>
                <h1>Subscriptions</h1>
            </div>
            <div className="border-b border-red-600">
                <h1>You</h1>
                <h1>History</h1>
            </div>

            <div className="border-b border-red-600">
                <h1>Sign in</h1>
            </div>

            <div className="border-b border-red-600">
                <h1>Trending</h1>
                <h1>Shoping</h1>
                <h1>Music</h1>
                <h1>Films</h1>
                <h1>Live</h1>
                <h1>Gaming</h1>
                <h1>News</h1>
                <h1>Sports</h1>
                <h1>Learning</h1>
                <h1>Fashion & beauty</h1>
                <h1>Podcast</h1>
            </div>

            <div className="border-b border-red-600">
                <h1>Browse Chanel</h1>
            </div>

            <div className="border-b border-red-600">
                <h1 className="font-bold">More From youtube</h1>
                <div>
                    <h1>YouTube Premium</h1>
                    <h1>YouTube Music</h1>
                    <h1>YouTube Kids</h1>
                </div>
            </div>

            <div className="border-b border-red-600">
                <h1>Settings</h1>
                <h1>Report History</h1>
                <h1>Help</h1>
                <h1>Send Feedback</h1>
            </div>

            <div className="">
                <p>About Youtube</p>
            </div>
        </div>
    ):""
};

export default SideBar;