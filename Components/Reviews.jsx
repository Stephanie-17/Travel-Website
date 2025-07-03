
import quote from '../src/assets/quote.png'
import persona1 from '../src/assets/persona4.jpeg'
import persona3 from '../src/assets/persona3.jpeg'
import './Reviews.css'



const Reviews = () => {
  return (
    <div className='reviews' id='reviews'>
        <p>True Testimonials</p>
        <h1>Reviews!!!</h1>
        <div className='reviews-cont'>
            <div className='personal-review'>
                <div className='absolute'>
                    <img src={quote} alt="" />
                </div>
                <div className="review-text">
                    <p>
                    loremmmmmmmmmmmmmmmmmmmmmmmm
                    mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                    mmmmmmmmmmmmmmmmmmmmmmmmmm
                    </p>
                    
                </div>
                <div className='personas'>
                    <img src={persona1} alt="" />
                </div>
            </div>

        
            <div className='personal-review'>
                <div className='absolute'>
                    <img src={quote} alt="" />
                </div>
                <div className="review-text">
                    <p>
                    loremmmmmmmmmmmmmmmmmmmmmmmm
                    mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                    mmmmmmmmmmmmmmmmmmmmmmmmmm
                    </p>
                   
                </div>
                <div className='personas'>
                    <img src={persona3} alt="" />
                </div>
            </div>
        </div>
        <button id='rvw-btn'>See More </button>
    </div>
  )
}

export default Reviews