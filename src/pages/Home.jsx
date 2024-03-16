import { FaUserFriends } from 'react-icons/fa'
import { GrRestroomWomen } from "react-icons/gr";
import { GrGrow } from "react-icons/gr";
import { GiTurtle } from "react-icons/gi"


const Home = () => {
    return (
        <div>
            <div className="flex items-center flex-col h-screen gap-5 mt-20 text-center">
                <h1 className='text-white font-extrabold text-6xl'>CONNECT. INVEST. GROW.</h1>
                <p className='text-xl text-white'>Invest in early stage startups and grow your wealth</p>
                <img className="bg-1" src="/background1.jpg" alt="" />
            </div>
            <h1>Why FinFlow?</h1>
            <section className="cards">
                <div className="card glass">
                    <GrRestroomWomen size={70} />
                    <h1>Invest</h1>
                    <p> Support and empower the women entrepreneurs in developing countries.</p>
                </div>
                <div className="card glass">
                    <FaUserFriends size={70} />
                    <h1>Connect</h1>
                    <p>Explore opportunities to expand your market reach and connect with new customers and partners.</p>
                </div>
                <div className="card glass">
                    <GrGrow size={70} />
                    <h1>Grow</h1>
                    <p>Fuel innovation by investing in groundbreaking ideas and startups by women entrepreneurs.</p>
                </div>
                <div className="card glass">
                    <GiTurtle size={70} />
                    <h1>Learn</h1>
                    <p>Mentorship programs for women that provide guidance from experienced professionals.</p>
                </div>
            </section>

            <footer>
                <p>© 2024 FinFlow</p>
            </footer>
        </div>
    )
}

export default Home
