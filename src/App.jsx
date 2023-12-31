import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomeLayout, About, Landing, Characters, CharacterInfo } from "./pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'characters',
        element: <Characters />,
      },
      {
        path: '/characters/:id',
        element: <CharacterInfo />,
      },
      // {
      //   path: 'newsletter',
      //   element: <Newsletter />,
      //   action: newsletterAction
      // },
      {
        path: 'about',
        element: <About />
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
