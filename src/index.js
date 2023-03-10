import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./component/pages/error-page";
import DashboardPage from "./component/pages/dashboard-pages/dashboard-page";
import LandingPage from "./component/pages/dashboard-pages/landing-page/landing-page";
import ProductPage from "./component/pages/dashboard-pages/product/product-page";
import VideoPage from "./component/pages/dashboard-pages/service/video-page";
import ViewVideoDetail from "./component/pages/dashboard-pages/service/view-video-detail";
import VideoCreateForm from "./component/pages/dashboard-pages/service/video-component/video-create-form";
import ProfilePage from "./component/profile/profile-page";
import Registration from "./component/user/register/Registration";
import ProductCreateForm from "./component/pages/dashboard-pages/product/user-components/product-create-form";
import ProductViewDetail from "./component/pages/dashboard-pages/product/user-components/product-view-detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: < App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/signup",
        element: < Registration/>,
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
                path: "product",
                element: < ProductPage/>
            },
            {
                path: "video",
                element: < VideoPage/>
            },
            {
                path: "service-view/:videoId",
                element: < ViewVideoDetail/>,
                // loader: videoIdLoader
            },
            {
                path: "service-create",
                element: < VideoCreateForm/>,
            },
            {
                path: "product-create",
                element: < ProductCreateForm/>,
            },
            {
                path: "product-view/:productId",
                element: < ProductViewDetail/>,
            },
            {
                path: "profile/:email",
                element: < ProfilePage/>,
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
