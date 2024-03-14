import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/card/card';
import PCard from '../../components/profile/card';
import styles from '@/styles/explore.css';

export default function page() {
    return (
        <main>
            <Navbar />
            <div className='section'>
                <div className='left'>
                    <h1 className='title'>POPULAR FUNDS</h1>
                    <div className='cards'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                    <h1 className='title'>TOP PICKS</h1>
                    <div className='cards'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className='right'>
                    <div className='profile-card'>
                    {/* <h1 className='title'>Profile</h1> */}
                        <div className='user'>
                            <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="" />
                        </div>
                        <PCard/>
                    </div>
                </div>
            </div>
        </main>
    )
}