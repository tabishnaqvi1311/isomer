import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import StartupCard from '../components/StartupCard/StartupCard';

const Profile = () => {

    const [user, setUser] = useState(null);

    const getUser = async () => {
        const id = localStorage.getItem("auth-id");
        const url = `http://localhost:8181/api/user/getUser/${id}`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            if (!response.ok) return;
            const json = await response.json();
            setUser(() => json.user);

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <main>
            <div className='left'>
                <img className='profile-pic' src="https://img.freepik.com/premium-vector/woman-violet-hoodie-grey-circle-with-bright-orange-hairs-cute-girl-avatar-circle_630301-56.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707696000&semt=ais" alt="" />
                <h1>{user && user.name}</h1>
                <h2 className='uppercase'>{user && user.role === "INV" ? "Investor" : "Entreprenuer"}</h2>
                <div className='glass-1'>
                    <h3>Contact: {user && user.contact}</h3>
                    <h3>Location: {user && user.state}</h3>
                    {/* <h3>Valuation : 45 Cr.</h3> */}
                </div>
            </div>
            <div className='right flex flex-col items-center gap-20'>
                <div className='glass-1'>
                    {user && user.role === "INV" && (
                        <>
                            <div className='top'>
                                <div className='flex-1'>
                                    <h4>Invested</h4>
                                    <h4>Returns</h4>
                                </div>dd\
                                <div className='flex-1'>
                                    <h4>₹15,620</h4>
                                    <h4 className='green'>₹42,000 </h4>
                                </div>
                            </div>
                            <div className='bottom'>
                                <div className='flex-1'>
                                    <h4>{user && user.name}</h4>
                                </div>
                                <div className='flex-1 inv'>
                                    <h4>FlowFlu</h4>
                                    <h4>₹15,620</h4>
                                </div>
                            </div>
                        </>
                    )}
                    <Link to={"/dashboard"} className='pt-4 text-gray-300 underline'>
                        View Dashboard For More Details
                    </Link>
                </div>
                {user && user.role === "ENT" ? (
                    user.business ?
                        <StartupCard id={user.business} />
                        :
                        <Link to={"/new"} className='text-2xl border p-5 rounded-xl border-gray-800 hover:bg-gray-700 transition-all duration-200'>
                            + Publish Startup
                        </Link>
                ) :
                    (
                        <></>
                    )
                }
            </div>
        </main>
    )
}

export default Profile