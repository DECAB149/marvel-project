import { React, useState } from 'react';


function CharCard (props) {
    const [charImg, setcharImg] = useState();



    return (
        <div>
            <div className='cardContainer'>
                <div className='charImg'>
                    <img src={charImg} alt='Reload Page'></img>
                </div>
            </div>  
            <div>
            name: {charData}
            <br></br>
            <img src={charImg} alt=''>
            </img>
            <br></br>
            <p>Description: {charInfo}</p>
      </div>  
        </div>
    )
}

export default CharCard;