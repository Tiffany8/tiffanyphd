import 'tailwindcss/tailwind.css'
import Root from './routes/root'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ErrorPage from 'errorPage'
import AboutPage from 'routes/about'
import ProjectsPage from 'routes/projects'
import BlogPage from 'routes/blog'
import ResumePage from 'routes/resume'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: 'about',
    element: <AboutPage />
  },
  {
    path: 'projects',
    element: <ProjectsPage />
  },
  {
    path: 'blog',
    element: <BlogPage />
  },
  {
    path: 'resume',
    element: <ResumePage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
