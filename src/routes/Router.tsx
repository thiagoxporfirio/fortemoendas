import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../components/organisms/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "about", element: <About /> },
			{ path: "contact", element: <Contact /> }
		]
	}
])

export default function Router() {
	return <RouterProvider router={router} />
}
