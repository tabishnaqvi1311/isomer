import styles from '@/styles/card.css';

const Card = () => {

  return (
    <div className='Pfund'>
          <div className='flex-container'>
            <p>Current</p>
            <p>Total Returns</p>
          </div>
          <div className='flex-container'>
            <p>₹19,080</p>
            <p className='green'>₹3,460 ( 18.13 % )</p>
          </div>

          <div className='flex-container gap'>
            <p>Invested</p>
            <p>1D Returns</p>
          </div>
          <div className='flex-container'>
            <p>₹109,000</p>
            <p className='red'>-₹322 ( 1.13 % )</p>
          </div>
        <div>

        </div>
    </div>
  )
}

export default Card
