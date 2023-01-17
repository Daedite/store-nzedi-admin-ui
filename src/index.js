import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./component/pages/error-page";
import DashboardPage from "./component/pages/dashboard-pages/dashboard-page";
import LandingPage from "./component/pages/dashboard-pages/landing-page/landing-page";
import UserPage from "./component/pages/dashboard-pages/user/user-page";
import VideoPage from "./component/pages/dashboard-pages/video/video-page";
import ViewVideoDetail from "./component/pages/dashboard-pages/video/view-video-detail";
import VideoCreateForm from "./component/pages/dashboard-pages/video/video-component/video-create-form";

const router = createBrowserRouter([
    {
        path: "/",
        element: < App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/home",
        element: < DashboardPage/>,
        children: [
            {
                path: "",
                element: < LandingPage/>
            },
            {
                path: "user",
                element: < UserPage/>
            },
            {
                path: "video",
                element: < VideoPage/>
            },
            {
                path: "video-view/:videoId",
                element: < ViewVideoDetail/>,
                // loader: videoIdLoader
            },
            {
                path: "video-create",
                element: < VideoCreateForm/>,
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div style={{height: "100vh"}}>
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
