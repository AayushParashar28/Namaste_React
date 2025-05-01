import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenue";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import userContext from "./utils/userContext";

const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
