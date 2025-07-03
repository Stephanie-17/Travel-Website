
import postcard from '../src/assets/postcards1.png'
import './Choice.css'

const Choice = () => {
  return (
    <div className='choice-cont'>
        <img src={postcard} alt="" id='postcard' className='postcard1' />
        <div className='choice-text'>
            <p  className='the-best'>Make the best choice</p>
            <h1>Why Choose Us</h1>
            <p> &bull; Expertise and Planning <br />
                Travel agencies provide professional insights, tailored itineraries, and handle all logistics, ensuring a seamless travel experience. <br /> <br />

                &bull; Time and Stress Savings <br />
                    They save you time by managing bookings and navigating complex travel arrangements, allowing you to focus on enjoying your trip. <br /> <br />

                &bull;  Access to Exclusive Deals <br />
                Agencies often have partnerships that grant access to exclusive discounts, upgrades, and perks that aren’t available to individual travelers.
            </p>

            
        </div>
        <img src={postcard} alt="" className='postcard2' />
    </div>
  )
}

export default Choice