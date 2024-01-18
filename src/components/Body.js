import SideBar from './Sidebar';
import { Outlet } from 'react-router-dom';

/** Layout
 * Body
 *     Sidebar
 *          Links
 *     Main Container
 *          #Links
 *          Videos Container
 *                  Video Cards
 */

const Body = ()=>{

    return(
        <div className='flex'>
        <SideBar />
        <Outlet />
        </div>
    )
};

export default Body;