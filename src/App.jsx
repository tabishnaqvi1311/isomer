import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <div className="gradient" />
      </div>
      <Outlet />
    </div>
  )
}

export default App
