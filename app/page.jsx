import Navbar from "@/components/Navbar/Navbar";
import styles from '@/styles/landing.css';
import { GiTurtle } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { GrGrow } from "react-icons/gr";
import { FaMoneyCheckAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="center">
        <h1>CONNECT. INVEST. GROW.</h1>
        <p>Invest in early stage startups and grow your wealth</p>

        {/* <div className="cta">
          <a href="/signup">Read More</a>
        </div> */}
        <img className="bg-1" src="/background1.jpg" alt="" />
      </div>

      <h1>Why FinFlow?</h1>
      <section className="cards">
        <div className="card glass">
          <FaMoneyCheckAlt size={70} />
          <h1>Invest</h1>
          <p>Invest in early stage startups and grow your wealth</p>
        </div>
        <div className="card glass">
          <FaUserFriends size={70} />
          <h1>Connect</h1>
          <p>Connect with other investors and startups</p>
        </div>
        <div className="card glass">
          <GrGrow size={70} />
          <h1>Grow</h1>
          <p>Grow your wealth and help startups grow</p>
        </div>
        <div className="card glass">
          <GiTurtle size={70} />
          <h1>Learn</h1>
          <p>Learn from other investors and startups</p>
        </div>
      </section>

      {/* <section className="featured">
        <div className="featured-startups">
          <h1>Featured Startups</h1>
          <div className="startup-card">
            <h2>Startup 1</h2>
            <p>Startup 1 description</p>
          </div>
        </div>
      </section> */}

      <footer>
        <p>© 2024 FinFlow</p>
      </footer>
    </main>
  )
}