import { useState } from 'react'
import open from  '../../src/assets/circleDashed.svg'
import close from '../../src/assets/circle.svg'
import asianBeauty from '../../src/assets/asianBeauty.jpeg'
import asianCity from '../../src/assets/asianCity.jpeg'
import asianCuisine from '../../src/assets/asianCuisine.jpeg'
import asianCulture from '../../src/assets/asianCulture.jpeg'
import asianhospitality from '../../src/assets/asianHospitality.jpeg'

const Asia = () => {
  const [image, setImage] = useState(1)
if (image === 1) {
    return(
        <div className="Africa2-cont">
            
            <img className="cont-image" src={asianBeauty} alt="" />
            <p className="cont-text"><span>Stunning Natural Beauty:</span>Marvel at towering Himalayan peaks, 
               serene Japanese gardens, and idyllic tropical islands in Bali, Phuket, and
                Langkawi.

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
            
            <img className="cont-image" src={asianCity} alt="" />
            <p className="cont-text"><span> Futuristic Cities and Modern Wonders:</span>Visit futuristic cities 
                   like Tokyo, Seoul, and Singapore, and explore iconic landmarks like the Petronas 
                   Twin Towers and Marina Bay Sands.</p>

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
            
            <img className="cont-image" src={asianCuisine} alt="" />
            <p className="cont-text"><span> Diverse and Delicious Cuisine:</span>Savor iconic dishes like sushi,
                    pad thai, dumplings, and curries. Discover street food havens in Bangkok,
                     Singapore, and Kuala Lumpur.
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
            
            <img className="cont-image" src={asianCulture} alt="" />
            <p className="cont-text"><span> Cultural Heritage: </span> Explore ancient temples, mosques, and pagodas, 
               such as Angkor Wat, Taj Mahal, and Borobudur. Experience vibrant festivals like Chinese
                New Year, Diwali, and Cherry Blossom.

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
            
            <img className="cont-image" src={asianhospitality} alt="" />
            <p className="cont-text"><span> Affordable and Welcoming Destinations:</span>Enjoy affordable
                accommodations, transportation, and activities in countries like Thailand,
                 Vietnam, and Cambodia, where warm hospitality and smiles await.

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

export default Asia
