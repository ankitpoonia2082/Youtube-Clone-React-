import ButtonList from "./ButtonList";
import VideoContainer from './VideoContainer';

const MainContainer = () => {

    const list = ['All', "News", "Comedy", 'COD', 'Education', 'Programing', 'Technology', 'Apple']

    return (
        <div className="col-span-10">
            {/* MAin Container Links */}
            <div className="flex">
                {list?.map((value, index) => 
                    (<ButtonList value={value} key={index}/>)
                )}
            </div>
            <div>
            <VideoContainer />
            </div>
        </div>
    )
};


export default MainContainer;