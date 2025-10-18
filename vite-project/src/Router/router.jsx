import { createBrowserRouter } from "react-router";
import Root from "../Compunent/Pages/Root";
import ErrorPage from "../Compunent/ErrorPage";
import About from "../Compunent/About";
import Home from "../Compunent/Home";
import Rooms from "../Compunent/Rooms";
import Foods from "../Compunent/Foods";
import Gallery from "../Compunent/Gallery";
import Services from "../Compunent/Services";
import Review from "../Compunent/Review";
import Find from "../Compunent/Find";
import Contact from "../Compunent/Contact";
import SingUp from "../Compunent/SingUp";
import SingIn from "../Compunent/SingIn";



 async function DataLoding() {
  const res = await fetch('/comments.json')
  const data = await res.json()
  return data.reviews
}


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: ErrorPage,
    children: [
      {
        index: true,
        loader: DataLoding,
        path: "/",
        Component: Home,
      },
      {
        path: "About us",
        Component: About,
      },
      {
        path: "Rooms",
        Component: Rooms,
      },
      {
        path: "Foods",
        Component: Foods,
      },
      {
        path: "Gallery",
        Component: Gallery,
      },
      {
        path: "Services",
        Component: Services,
      },
      {
        path: "Review",
        Component: Review,
      },
      {
        path: "Find us",
        Component: Find,
      },
      {
        path: "Contact us",
        Component: Contact,
      },
      {
        path: "SingUp",
        Component: SingUp
      },
      {
        path: "SingIn",
        Component: SingIn
      }
    ],
  },
]);
