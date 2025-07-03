import { useState } from "react"
import './Destcontinent.css'
import adventure from '../../src/assets/adventure.jpeg'
import beach from '../../src/assets/beach.jpeg'
import cuisine from '../../src/assets/Cuisine.jpeg'
import heritage from '../../src/assets/cultural-heritage.jpeg'
import wildlife from '../../src/assets/wild-life.jpeg'
import wonder from  '../../src/assets/naturalWonders.jpeg'
import Cities from  '../../src/assets/vibrantCity.jpeg'
import history from '../../src/assets/incaCity.jpeg'
import landscape from '../../src/assets/amazon.jpeg'
import food from '../../src/assets/richCuisine.jpeg'
import asianBeauty from '../../src/assets/asianBeauty.jpeg'
import asianCity from '../../src/assets/asianCity.jpeg'
import asianCuisine from '../../src/assets/asianCuisine.jpeg'
import asianCulture from '../../src/assets/asianCulture.jpeg'
import asianhospitality from '../../src/assets/asianHospitality.jpeg'
import aussieAdventure from '../../src/assets/australianAdventure.jpeg'
import aussieCoast from '../../src/assets/australianCoast.jpeg'
import aussieNature from '../../src/assets/australianNature.jpeg'
import aussieUrban from '../../src/assets/australianUrban.jpeg'
import aussieWildlife from '../../src/assets/australianWildlifes.jpeg'
import europeArchitecture from '../../src/assets/europeArchitecture.jpeg'
import europeCuisine from '../../src/assets/europeCuisine.jpeg'
import europeHeritage from '../../src/assets/europeHeritage.jpeg'
import europeLandscape from '../../src/assets/europeLandscapes.jpeg'
import europeUrban from '../../src/assets/europeUrban.jpeg'









const Destcontinent = () => {
    const [continent, setContinent] = useState(1)

    if (continent === 1) {
        return(
            <div className="Africa-cont">
                 <div className="buttons">
                        <button onClick={()=>setContinent(1)} className="continents">Africa</button>
                        <button onClick={()=>setContinent(2)} className="continents">America</button>
                        <button onClick={()=>setContinent(3)} className="continents">Asia</button>
                        <button onClick={()=>setContinent(4)} className="continents">Australia</button>
                        <button onClick={()=>setContinent(5)} className="continents">Europe</button>
                    </div>

              <h2>Five reasons to visit Africa</h2>
              <div className="reasons">
                    <div className="right-side">

                            <img src={wildlife} alt="wildlife and nature" />
                            
                            <p><span>Rich cultural heritage:</span>Discover Africas vibrant cultural tapestry,
                             with 2,000 languages and 3,000 ethnic groups. Explore museums, historical sites,
                              and cultural festivals to uncover ancient traditions and modern identity.
                            </p>

                            <img src={beach} id="beach" alt="stunning beaches and islands" />
                            <p><span>Adventure and outdoor activities:</span> Get your adrenaline fix in Africa!
                             Hike Kilimanjaro, go on safari, or raft the Nile River. Explore the Sahara, trek 
                              Atlas Mountains, or kayak the Garden Route.
                            </p>

                            <img src={cuisine} id="cuisine" alt="warm hospitality and cuisine" />

                    </div> 

                    <span></span>

                    <div className="left-side">
                        <p><span>Wildlife and nature:</span> Experience Africas incredible wildlife and natural wonders
                        , from majestic lions to breathtaking Victoria Falls. Witness the Great Migration, explore national
                         parks, or take a hot air balloon safari.
                        </p>
                        <img src={heritage} id='heritage' alt="rich cultural heritage" />

                        <p><span>Stunning beaches and islands:</span> Unwind on pristine shores in Zanzibar, Mauritius, and 
                        Seychelles. Enjoy snorkeling, diving, and water sports, or explore island villages for a taste of 
                        African island life.
                        </p>
                        <img src={adventure} id="adventure" alt="adventure and outdoor activities" />

                        <p><span>Warm hospitality and cuisine:</span> Indulge in African hospitality, savoring spicy jollof rice
                        , flavorful tagines, and tender injera bread. Engage with locals, learn traditional dances, or join a 
                        festive celebration to experience Africas warmth.
                        </p>
                    </div>
              </div> 
            </div>
        )
    } else if (continent === 2) {
        return(

        <div className="Africa-cont"> {/*american continent */}
        <div className="buttons">
               <button onClick={()=>setContinent(1)} className="continents">Africa</button>
               <button onClick={()=>setContinent(2)} className="continents">America</button>
               <button onClick={()=>setContinent(3)} className="continents">Asia</button>
               <button onClick={()=>setContinent(4)} className="continents">Australia</button>
               <button onClick={()=>setContinent(5)} className="continents">Europe</button>
           </div>

     <h2>Five reasons to visit America</h2>
     <div className="reasons">
           <div className="right-side">

                   <img src={wonder} alt="Unparalleled Natural Wonders" />
                   <p><span>Vibrant cities and culture:</span>Experience the bright lights of New York City, jazz in New Orleans, Latin American rhythms in Miami, and the vibrant cultural scenes in Mexico City and Rio de Janeiro.

</p>

                   <img src={history} alt="rich history and heritage" />
                   <p><span>Diverse landscapes and wildlife:</span>Discover tropical rainforests in the Amazon, vast deserts in the American West, majestic mountain ranges like the Rockies and Andes, and incredible wildlife in the Galapagos Islands.
                   </p>

                   <img src={food} alt="Delicious cuisine and festivals" />

           </div> 

           <span>.</span>

           <div className="left-side">
               <p><span>Unparalleled natural wonders:</span>Explore the majestic Grand Canyon, breathtaking Niagara Falls, stunning Yellowstone National Park, and majestic glaciers in Alaska and Canada.

</p>
               <img src={Cities} alt="vibrant cities and cultures" />

               <p><span>Rich history and heritage:</span>Visit iconic landmarks like the Statue of Liberty, Independence Hall in Philadelphia, and the ancient Inca city of Machu Picchu.
               </p>
               <img src={landscape} alt="diverse landscapes and wildlife" />

               <p><span>Delicious cuisine and festivals:</span>Indulge in mouth-watering BBQ, Tex-Mex, and Cajun cuisine, sample Latin American street food, and join vibrant festivals like Mardi Gras in New Orleans, Carnaval in Rio, and Dia de los Muertos in Mexico.
               </p>
           </div>
     </div> 
   </div>
)          
    } else if (continent === 3) {
        return(
        <div className="Africa-cont"> {/*asian continent */}
        <div className="buttons">
               <button onClick={()=>setContinent(1)} className="continents">Africa</button>
               <button onClick={()=>setContinent(2)} className="continents">America</button>
               <button onClick={()=>setContinent(3)} className="continents">Asia</button>
               <button onClick={()=>setContinent(4)} className="continents">Australia</button>
               <button onClick={()=>setContinent(5)} className="continents">Europe</button>
           </div>

     <h2>Five reasons to visit Asia</h2>
     <div className="reasons">
           <div className="right-side">

                   <img src={asianCulture} alt="Cultural Heritage" />
                   <p><span> Diverse and Delicious Cuisine:</span>Savor iconic dishes like sushi,
                    pad thai, dumplings, and curries. Discover street food havens in Bangkok,
                     Singapore, and Kuala Lumpur.
                   </p>

                   <img src={asianBeauty} alt="stunning natural beauty" />
                   <p><span> Futuristic Cities and Modern Wonders:</span>Visit futuristic cities 
                   like Tokyo, Seoul, and Singapore, and explore iconic landmarks like the Petronas 
                   Twin Towers and Marina Bay Sands.</p>

                   <img src={asianhospitality} alt="Affordable and Welcoming Destinations" />

           </div> 

           <span>.</span>

           <div className="left-side">
               <p><span> Cultural Heritage: </span> Explore ancient temples, mosques, and pagodas, 
               such as Angkor Wat, Taj Mahal, and Borobudur. Experience vibrant festivals like Chinese
                New Year, Diwali, and Cherry Blossom.

</p>
               <img src={asianCuisine} alt="Diverse and Delicious Cuisine" />

               <p><span>Stunning Natural Beauty:</span>Marvel at towering Himalayan peaks, 
               serene Japanese gardens, and idyllic tropical islands in Bali, Phuket, and
                Langkawi.

</p>
               <img src={asianCity} alt="futuristic Cities and Modern Wonders
" />

               <p><span> Affordable and Welcoming Destinations:</span>Enjoy affordable
                accommodations, transportation, and activities in countries like Thailand,
                 Vietnam, and Cambodia, where warm hospitality and smiles await.

</p>
           </div>
     </div> 
   </div>
)
    } else if (continent === 4) {

        return(  <div className="Africa-cont"> {/*australian continent */}
            <div className="buttons">
                   <button onClick={()=>setContinent(1)} className="continents">Africa</button>
                   <button onClick={()=>setContinent(2)} className="continents">America</button>
                   <button onClick={()=>setContinent(3)} className="continents">Asia</button>
                   <button onClick={()=>setContinent(4)} className="continents">Australia</button>
                   <button onClick={()=>setContinent(5)} className="continents">Europe</button>
               </div>

         <h2>Five reasons to visit Australia</h2>
         <div className="reasons">
               <div className="right-side">

                       <img src={aussieWildlife} alt="wildlife wonders" />
                       <p><span>Coastal charm:</span>Discover pristine beaches, coral reefs,
                        and scenic coastlines, including the Great Barrier Reef, Surfers Paradise,
                         Bondi Beach, and Margaret River. With over 50,000 kilometers of coastline,
                          youll find plenty of secluded spots.
                       </p>

                       <img src={aussieUrban} alt="urban delights" />
                       <p><span>Natural marvels:</span>Marvel at Uluru (Ayers Rock), the Great Ocean 
                       Road, Blue Mountains National Park, Kakadu National Park, and the Pinnacles 
                       Desert. Australias diverse landscapes are breathtaking.
                       </p>

                       <img src={aussieAdventure} alt="adventure playground" />

               </div> 

               <span>.</span>

               <div className="left-side">
                   <p><span>Wildlife Wonders:</span>Australia is home to incredible wildlife,
                    including kangaroos, koalas, wombats, and Tasmanian devils. Explore renowned 
                    zoos and wildlife sanctuaries to encounter these iconic animals.</p>
                   <img src={aussieCoast} alt="Coastal charm" />

                   <p><span>Urban delights:</span>Australias cities are vibrant and cosmopolitan. 
                   Sydneys Opera House and Harbour Bridge are must-visits, while Melbournes
                    cultural scene and Brisbanes arts scene are worth exploring.
                   </p>
                   <img src={aussieNature} alt="Natural marvels" />

                   <p><span>Adventure playground:</span>Enjoy surfing, snorkeling, hiking, 
                   scuba diving, skydiving, and camping under the stars. Australias diverse 
                   climates and landscapes make it perfect for outdoor enthusiasts.

</p>
               </div>
         </div> 
       </div>
   )
        
    } else if (continent === 5) {

        return (  <div className="Africa-cont"> {/*european continent */}
            <div className="buttons">
                   <button onClick={()=>setContinent(1)} className="continents">Africa</button>
                   <button onClick={()=>setContinent(2)} className="continents">America</button>
                   <button onClick={()=>setContinent(3)} className="continents">Asia</button>
                   <button onClick={()=>setContinent(4)} className="continents">Australia</button>
                   <button onClick={()=>setContinent(5)} className="continents">Europe</button>
               </div>

         <h2>Five reasons to visit Europe</h2>
         <div className="reasons">
               <div className="right-side">

                       <img src={europeHeritage} alt="Immersive Heritage Experience" />
                       <p><span>Breathtaking Landscapes:</span>Explore Europes diverse geography, from Norways 
                       majestic fjords to Switzerlands towering Alps. Visit charming villages, pristine
                        beaches, and idyllic islands in Greece, Italy, and Spain.
                       </p>

                       <img src={europeArchitecture} alt="Artistic and Architectural Treasures" />
                       <p><span>Vibrant Urban Centers:</span>Experience the dynamic energy of European cities,
                        from trendy London to vibrant Berlin and Amsterdam. Enjoy lively nightlife, festivals, 
                        and gastronomic scenes in cities like Ibiza, Prague, and Dublin.                       </p>

                       <img src={europeCuisine} alt="Culinary delights" />

               </div> 

               <span>.</span>

               <div className="left-side">
                   <p><span>Immersive Heritage Experience:</span>Uncover the continents fascinating past,
                    from ancient ruins to majestic palaces. Discover iconic symbols of European identity,
                     such as the Eiffel Tower, Colosseum, and Acropolis.
</p>
                   <img src={europeLandscape} alt="breathtaking landscapes" />

                   <p><span>Artistic and Architectural Treasures:</span>Marvel at masterpieces in renowned 
                   museums like the Louvre, Uffizi, and Prado. Admire the continents rich architectural
                    heritage, from Gothic to Renaissance styles, in cities like Paris, Rome, and Barcelona.</p>
                   <img src={europeUrban} alt="Vibrant Urban Centers" />

                   <p><span>Culinary Delights:</span>Indulge in Europes renowned cuisine, from Italian
                    pasta to Spanish tapas and French patisserie. Sample exceptional wines from Italy,
                     France, Spain, and Portugal.
                   </p>
               </div>
         </div> 
       </div>
   )
        
    }
  return (
    <div className="buttons">
        <button onClick={()=>setContinent(1)} className="continents">Africa</button>
        <button onClick={()=>setContinent(2)} className="continents">America</button>
        <button onClick={()=>setContinent(3)} className="continents">Asia</button>
        <button onClick={()=>setContinent(4)} className="continents">Australia</button>
        <button onClick={()=>setContinent(5)} className="continents">Europe</button>
    </div>
  )
}

export default Destcontinent
