import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
/** App Layout
 * Head --
 *      Button
 *      Logo
 *      Searchbar
 *      mike
 *      User Logo
 */


const Head = () => {

    const dispatch = useDispatch()

    const togglerBtn = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col p-4 justify-between">
            {/* Section 1 */}
            <div className="flex items-center col-span-2">
                <img
                    onClick={() => togglerBtn()}
                    className=" h-7 cursor-pointer"
                    src='https://t3.ftcdn.net/jpg/01/09/45/80/240_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg'
                    alt="⌘"
                ></img>

                <img className="h-14 ms-4 cursor-pointer"
                    alt="Logo"
                    src='https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=740'>
                </img>
            </div>
            {/* Section 2 */}
            <div className="flex col-span-8 items-center justify-between">
                <div className="flex col-span-2 w-full me-3 ">
                    <input
                        className="rounded-s-full border border-gray-400 p-1 w-full ps-3"
                        placeholder="Search">
                    </input>

                    <button
                        className="rounded-e-full py-1 px-3 bg-gray-300"
                    >🔍</button>
                </div>
                <img
                    className=" h-8"
                    alt="microphone"
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/microphone-1495866-1265354.png?f=webp&w=256"></img>
            </div>
            {/* Section 3 */}
            <div className="flex items-center col-span-2">
                <img
                    className=" h-10" alt="Menu"
                    src="https://cdn.iconscout.com/icon/free/png-512/free-menu-1439743-1214315.png?f=webp&w=256"></img>
                <img
                    className="h-14"
                    alt="User"
                    src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?w=740"></img>
            </div>
        </div>
    );
};


export default Head;