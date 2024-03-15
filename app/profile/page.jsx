import styles from '@/styles/profile.css';

export default function profile() {
    return (
        <main>
            <div className='left'>
                <img className='profile-pic' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="" />
                <h1>Ranveer Brar</h1>
                <h2>INVESTOR</h2>
                <div className='glass'>
                    <h3>Phone No. : 6969696969</h3>
                    <h3>Company : FlowFlu</h3>
                    <h3>Location : Mumbai</h3>
                    <h3>Position : CTO</h3>
                    <h3>Valuation : 45 Cr.</h3>
                </div>
            </div>
            <div className='right'>
                    <div className='glass'>
                        <div className='top'>
                                <div className='flex-1'>
                                    <h4>Invested</h4>
                                    <h4>Returns</h4>
                                </div>
                                <div className='flex-1'>
                                    <h4>₹15,620</h4>
                                    <h4 className='green'>₹42,000 </h4>
                                </div>
                        </div>
                        <div className='bottom'>
                            <div className='flex-1'>
                                <h4>Name</h4>
                                <h4>Amount</h4>
                            </div>
                            <div className='flex-1 inv'>
                                <h4>FlowFlu</h4>
                                <h4>₹15,620</h4>
                            </div>
                        </div>
                    </div>
            </div>
        </main>
    )
}