import React, { useState } from 'react'
import open from  '../../src/assets/circleDashed.svg'
import close from '../../src/assets/circle.svg'
import europeArchitecture from '../../src/assets/europeArchitecture.jpeg'
import europeCuisine from '../../src/assets/europeCuisine.jpeg'
import europeHeritage from '../../src/assets/europeHeritage.jpeg'
import europeLandscape from '../../src/assets/europeLandscapes.jpeg'
import europeUrban from '../../src/assets/europeUrban.jpeg'

const Europe = () => {
  const [image, setImage] = useState(1)
if (image === 1) {
    return(
        <div className="Africa2-cont">
            
            <img className="cont-image" src={europeArchitecture} alt="" />
            <p className="cont-text"><span>Artistic and Architectural Treasures:</span>Marvel at masterpieces in renowned 
                   museums like the Louvre, Uffizi, and Prado. Admire the continent's rich architectural
                    heritage, from Gothic to Renaissance styles, in cities like Paris, Rome, and Barcelona.</p>
           

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
            
            <img className="cont-image" src={europeCuisine} alt="" />
            <p className="cont-text"><span>Culinary Delights:</span>Indulge in Europe's renowned cuisine, from Italian
                    pasta to Spanish tapas and French patisserie. Sample exceptional wines from Italy,
                     France, Spain, and Portugal.
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
            
            <img className="cont-image" src={europeHeritage} alt="" />
            <p className="cont-text"><span>Immersive Heritage Experience:</span>Uncover the continent's fascinating past,
                    from ancient ruins to majestic palaces. Discover iconic symbols of European identity,
                     such as the Eiffel Tower, Colosseum, and Acropolis.
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
            
            <img className="cont-image" src={europeLandscape} alt="" />
            <p className="cont-text"><span>Breathtaking Landscapes:</span>Explore Europe's diverse geography, from Norway's 
                       majestic fjords to Switzerland's towering Alps. Visit charming villages, pristine
                        beaches, and idyllic islands in Greece, Italy, and Spain.
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
            
            <img className="cont-image" src={europeUrban} alt="" />
            <p className="cont-text"><span>Vibrant Urban Centers:</span>Experience the dynamic energy of European cities,
                        from trendy London to vibrant Berlin and Amsterdam. Enjoy lively nightlife, festivals, 
                        and gastronomic scenes in cities like Ibiza, Prague, and Dublin.                       </p>


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

export default Europe