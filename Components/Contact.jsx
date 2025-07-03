
import './contact.css'

const Contact = () => {
  return (
    <div className='contact-cont' id='contact'>
        <div className='contact'>
            <h2>Contact Us</h2>
            <input type="text" placeholder='Fullname' />
            <input type="text" placeholder='Email Address' />
            <input type='text' placeholder='Message(s)'/>

            <button className='rvw-btn'>Submit </button>

        </div>
    </div>
  )
}

export default Contact