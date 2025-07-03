import { useState } from 'react'
import Africa from './Africa'
import Asia from './Asia'
import Australia from './Australia'
import America from './America'
import Europe from './Europe'
import './Destsmallcontinent.css'


const Destsmallcontinent = () => {
    const [continent, setContinent] = useState(1)

    if (continent === 1) {
        return( 
            <div>
                <div className="buttons2">
                    <button onClick={()=>setContinent(1)} className="continents">Africa</button>
                    <button onClick={()=>setContinent(2)} className="continents">America</button>
                    <button onClick={()=>setContinent(3)} className="continents">Asia</button>
                    <button onClick={()=>setContinent(4)} className="continents">Australia</button>
                    <button onClick={()=>setContinent(5)} className="continents">Europe</button>
               </div>

               <Africa />
            </div>
        

        )
    } else 
    if (continent === 2) {
        return( 
            <div>
                <div className="buttons2">
                    <button onClick={()=>setContinent(1)} className="continents">Africa</button>
                    <button onClick={()=>setContinent(2)} className="continents">America</button>
                    <button onClick={()=>setContinent(3)} className="continents">Asia</button>
                    <button onClick={()=>setContinent(4)} className="continents">Australia</button>
                    <button onClick={()=>setContinent(5)} className="continents">Europe</button>
               </div>

               <Asia />
            </div>
        

        )
    }else
    if (continent === 3) {
        return( 
            <div>
                <div className="buttons2">
                    <button onClick={()=>setContinent(1)} className="continents">Africa</button>
                    <button onClick={()=>setContinent(2)} className="continents">America</button>
                    <button onClick={()=>setContinent(3)} className="continents">Asia</button>
                    <button onClick={()=>setContinent(4)} className="continents">Australia</button>
                    <button onClick={()=>setContinent(5)} className="continents">Europe</button>
               </div>

               <America />
            </div>
        

        )
    }else
    if (continent === 4) {
        return( 
            <div>
                <div className="buttons2">
                    <button onClick={()=>setContinent(1)} className="continents">Africa</button>
                    <button onClick={()=>setContinent(2)} className="continents">America</button>
                    <button onClick={()=>setContinent(3)} className="continents">Asia</button>
                    <button onClick={()=>setContinent(4)} className="continents">Australia</button>
                    <button onClick={()=>setContinent(5)} className="continents">Europe</button>
               </div>

               <Australia />
            </div>
        

        )
    }else
    if (continent === 5) {
        return( 
            <div>
                <div className="buttons2">
                    <button onClick={()=>setContinent(1)} className="continents">Africa</button>
                    <button onClick={()=>setContinent(2)} className="continents">America</button>
                    <button onClick={()=>setContinent(3)} className="continents">Asia</button>
                    <button onClick={()=>setContinent(4)} className="continents">Australia</button>
                    <button onClick={()=>setContinent(5)} className="continents">Europe</button>
               </div>

               <Europe />
            </div>
        

        )
    }
  return (
    <div className="buttons2">
        <button onClick={()=>setContinent(1)} className="continents">Africa</button>
        <button onClick={()=>setContinent(2)} className="continents">America</button>
        <button onClick={()=>setContinent(3)} className="continents">Asia</button>
        <button onClick={()=>setContinent(4)} className="continents">Australia</button>
        <button onClick={()=>setContinent(5)} className="continents">Europe</button>
    </div>
  )
}

export default Destsmallcontinent