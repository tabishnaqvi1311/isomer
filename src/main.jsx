import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import "./index.css"
import Dashboard from './pages/Dashboard.jsx'
import Explore from './pages/Explore.jsx'
import Profile from './pages/Profile.jsx'
import CreateStartup from './pages/CreateStartup.jsx'
import Startup from './pages/Startup.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='explore' element={<Explore />} />
      <Route path='profile' element={<Profile />} />
      <Route path='new' element={<CreateStartup />} />
      <Route path='startup/:id' element={<Startup/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
