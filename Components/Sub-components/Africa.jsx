import { useState } from "react"
import React  from 'react'
import adventure from '../../src/assets/adventure.jpeg'
import beach from '../../src/assets/beach.jpeg'
import cuisine from '../../src/assets/cuisine.jpeg'
import heritage from '../../src/assets/cultural-heritage.jpeg'
import wildlife from '../../src/assets/wild-life.jpeg'
import open from  '../../src/assets/circleDashed.svg'
import close from '../../src/assets/circle.svg'
import './Africa.css'

const Africa = () => {
const [image, setImage] = useState(1)
if (image === 1) {
    return(
        <div className="Africa2-cont">
            
            <img className="cont-image" src={adventure} alt="" />
            <p className="cont-text"><span>Adventure and outdoor activities:</span> Get your adrenaline fix in Africa!
                             Hike Kilimanjaro, go on safari, or raft the Nile River. Explore the Sahara, trek 
                              Atlas Mountains, or kayak the Garden Route.
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
            
            <img className="cont-image" src={beach} alt="" />
            <p className="cont-text"><span>Stunning beaches and islands:</span> Unwind on pristine shores in Zanzibar, Mauritius, and 
                        Seychelles. Enjoy snorkeling, diving, and water sports, or explore island villages for a taste of 
                        African island life.
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
            
            <img className="cont-image" src={cuisine} alt="" />
            <p className="cont-text"><span>Warm hospitality and cuisine:</span> Indulge in African hospitality, savoring spicy jollof rice
                        , flavorful tagines, and tender injera bread. Engage with locals, learn traditional dances, or join a 
                        festive celebration to experience Africa's warmth.
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
            
            <img className="cont-image" src={heritage} alt="" />
            <p className="cont-text"><span>Rich cultural heritage:</span>Discover Africa's vibrant cultural tapestry,
                             with 2,000 languages and 3,000 ethnic groups. Explore museums, historical sites,
                              and cultural festivals to uncover ancient traditions and modern identity.
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
            
            <img className="cont-image" src={wildlife} alt="" />
            <p className="cont-text"><span>Wildlife and nature:</span> Experience Africa's incredible wildlife and natural wonders
                        , from majestic lions to breathtaking Victoria Falls. Witness the Great Migration, explore national
                         parks, or take a hot air balloon safari.
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

export default Africa