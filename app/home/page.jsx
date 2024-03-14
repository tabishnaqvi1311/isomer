import Navbar from '../../components/Navbar/Navbar';
import styles from '@/styles/landing.css';

export default function page() {
  return (
      <main>
          <Navbar /> 
          <div className='logo'>
            <img src="/logo2.png" alt="" />
          </div>
      </main>
  )
}