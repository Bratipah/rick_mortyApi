import { useState } from 'react'
import './App.css'
import CardImage from './components/CardImage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/characters",
      element: "Characters",
    },
    {
      path: "/loactions",
      element: "Locations",
    },
    {
      path: "/search",
      element: "Search",
    },
  ]);

  return (
    <>
      <CardImage/>
    </>
  )
}

export default App
