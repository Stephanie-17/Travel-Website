import React, { useState } from 'react'
import open from  '../../src/assets/circleDashed.svg'
import close from '../../src/assets/circle.svg'
import wonder from  '../../src/assets/naturalWonders.jpeg'
import Cities from  '../../src/assets/vibrantCity.jpeg'
import history from '../../src/assets/incaCity.jpeg'
import landscape from '../../src/assets/amazon.jpeg'
import food from '../../src/assets/richCuisine.jpeg'

const America = () => {
    
    const [image, setImage] = useState(1)
if (image === 1) {
    return(
        <div className="Africa2-cont">
            
            <img className="cont-image" src={wonder} alt="" />
            <p className="cont-text"><span>Unparalleled natural wonders:</span>Explore the majestic Grand Canyon, breathtaking Niagara Falls, stunning Yellowstone National Park, and majestic glaciers in Alaska and Canada.

</p>

           <div className="btn-imgs">
              <img onClick={()=> setImage(1)} src={open} alt="" />
              <img onClick={()=> setImage(2)} src={close} alt="" />
              <img onClick={()=> setImage(3)} src={close} alt="" />
              <img onClick={()=> setImage(4)} src={close} alt="" />
              <img onClick={()=> setImage(5)} src={close} alt="" />
           </div>
        </div>
    )
    
} else if (image === 2) {
    return(
        <div className="Africa2-cont">
            
            <img className="cont-image" src={Cities} alt="" />
            <p className="cont-text"><span>Vibrant cities and culture:</span>Experience the bright lights of New York City, jazz in New Orleans, Latin American rhythms in Miami, and the vibrant cultural scenes in Mexico City and Rio de Janeiro.

</p>

           <div className="btn-imgs">
              <img onClick={()=> setImage(1)} src={close} alt="" />
              <img onClick={()=> setImage(2)} src={open} alt="" />
              <img onClick={()=> setImage(3)} src={close} alt="" />
              <img onClick={()=> setImage(4)} src={close} alt="" />
              <img onClick={()=> setImage(5)} src={close} alt="" />
           </div>
        </div>
    )
    
} else if (image === 3) {
    return(
        <div className="Africa2-cont">
            
            <img className="cont-image" src={history} alt="" />
            <p className="cont-text"><span>Rich history and heritage:</span>Visit iconic landmarks like the Statue of Liberty, Independence Hall in Philadelphia, and the ancient Inca city of Machu Picchu.
            </p>

           <div className="btn-imgs">
              <img onClick={()=> setImage(1)} src={close} alt="" />
              <img onClick={()=> setImage(2)} src={close} alt="" />
              <img onClick={()=> setImage(3)} src={open} alt="" />
              <img onClick={()=> setImage(4)} src={close} alt="" />
              <img onClick={()=> setImage(5)} src={close} alt="" />
           </div>
        </div>
    )
    
}else if (image === 4) {
    return(
        <div className="Africa2-cont">
            
            <img className="cont-image" src={landscape} alt="" />
            <p className="cont-text"><span>Diverse landscapes and wildlife:</span>Discover tropical rainforests in the Amazon, vast deserts in the American West, majestic mountain ranges like the Rockies and Andes, and incredible wildlife in the Galapagos Islands.
                   </p>


           <div className="btn-imgs">
              <img onClick={()=> setImage(1)} src={close} alt="" />
              <img onClick={()=> setImage(2)} src={close} alt="" />
              <img onClick={()=> setImage(3)} src={close} alt="" />
              <img onClick={()=> setImage(4)} src={open} alt="" />
              <img onClick={()=> setImage(5)} src={close} alt="" />
           </div>
        </div>
    )
    
}  else if (image === 5) {
    return(
        <div className="Africa2-cont">
            
            <img className="cont-image" src={food} alt="" />
            <p className="cont-text"><span>Delicious cuisine and festivals:</span>Indulge in mouth-watering BBQ, Tex-Mex, and Cajun cuisine, sample Latin American street food, and join vibrant festivals like Mardi Gras in New Orleans, Carnaval in Rio, and Dia de los Muertos in Mexico.
            </p>

           <div className="btn-imgs">
              <img onClick={()=> setImage(1)} src={close} alt="" />
              <img onClick={()=> setImage(2)} src={close} alt="" />
              <img onClick={()=> setImage(3)} src={close} alt="" />
              <img onClick={()=> setImage(4)} src={close} alt="" />
              <img onClick={()=> setImage(5)} src={open} alt="" />
           </div>
        </div>
    )
    
}
  
}

export default America