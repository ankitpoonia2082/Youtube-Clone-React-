import "./App.css";
import Head from "./components/Head";
import Body from './components/Body';
import { Provider } from "react-redux";
import store from './components/utils/store';
import WatchPage from "./components/WatchPage";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import MainContainer from "./components/MainContainer";

/** App Layout
 * Head --
 *      Button
 *      Logo
 *      Searchbar
 *      mike
 *      User Logo
 * 
 * Body --
 *    Sidebar-
 *        Links/Home,Trending etc
 * 
 *    Main Container-
 *        # Links
 *        Videos Container
 *              Videos Card
 */

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <RouterProvider router={router}>
        </RouterProvider>
      </Provider>
    </>
  );
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: `/watch?v=:id`,
        element: <WatchPage />,
      },]
  }
])

export default App;
