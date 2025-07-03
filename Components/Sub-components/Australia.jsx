import React, { useState } from 'react'
import open from  '../../src/assets/circleDashed.svg'
import close from '../../src/assets/circle.svg'
import aussieAdventure from '../../src/assets/australianadventure.jpeg'
import aussieCoast from '../../src/assets/australianCoast.jpeg'
import aussieNature from '../../src/assets/australianNature.jpeg'
import aussieUrban from '../../src/assets/australianUrban.jpeg'
import aussieWildlife from '../../src/assets/australianWildlifes.jpeg'

const Australia = () => {
  const [image, setImage] = useState(1)
if (image === 1) {
    return(
        <div className="Africa2-cont">
            
            <img className="cont-image" src={aussieAdventure} alt="" />
            <p className="cont-text"><span>Adventure playground:</span>Enjoy surfing, snorkeling, hiking, 
                   scuba diving, skydiving, and camping under the stars. Australia's diverse 
                   climates and landscapes make it perfect for outdoor enthusiasts.

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
            
            <img className="cont-image" src={aussieCoast} alt="" />
            <p className="cont-text"><span>Coastal charm:</span>Discover pristine beaches, coral reefs,
                        and scenic coastlines, including the Great Barrier Reef, Surfers Paradise,
                         Bondi Beach, and Margaret River. With over 50,000 kilometers of coastline,
                          you'll find plenty of secluded spots.
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
            
            <img className="cont-image" src={aussieNature} alt="" />
            <p className="cont-text"><span>Natural marvels:</span>Marvel at Uluru (Ayers Rock), the Great Ocean 
                       Road, Blue Mountains National Park, Kakadu National Park, and the Pinnacles 
                       Desert. Australia's diverse landscapes are breathtaking.
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
            
            <img className="cont-image" src={aussieUrban} alt="" />
            <p className="cont-text"><span>Urban delights:</span>Australia's cities are vibrant and cosmopolitan. 
                   Sydney's Opera House and Harbour Bridge are must-visits, while Melbourne's
                    cultural scene and Brisbane's arts scene are worth exploring.
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
            
            <img className="cont-image" src={aussieWildlife} alt="" />
            <p className="cont-text"><span>Wildlife Wonders:</span>Australia is home to incredible wildlife,
                    including kangaroos, koalas, wombats, and Tasmanian devils. Explore renowned 
                    zoos and wildlife sanctuaries to encounter these iconic animals.</p>

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

export default Australia