import AboutUs from "../Pages/AboutUs"
import Formation from "../Pages/Formation"
import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Hobbies from "../Pages/Hobbies"
import Experiences from "../Pages/Experiences"

export const router = createBrowserRouter([
  {
    path: '/', element: <App />,

    children: [
      { path: '/', element: <AboutUs /> },
      { path: '/formation', element: <Formation /> },
      { path: '/hobbies', element: <Hobbies/> },
      { path: '/experiences', element: <Experiences/> },

    ]
  }
])


