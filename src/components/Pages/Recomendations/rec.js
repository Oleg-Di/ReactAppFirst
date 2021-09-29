import React from "react";

import './rec.scss'
import { Player } from 'video-react';
import YoutubeEmbed from './YouTube/youtube';


const Rec = () => {



    return(
        <div className='Rec'>
            <h1>Our recommendations in this video:</h1>
            <div className='Rec__video'>
            {/* <Player>
                <source src="https://www.youtube.com/watch?v=UItWltVZZmE&ab_channel=PamelaReif" />
            </Player> */}
            <YoutubeEmbed embedId="ixkQaZXVQjs" />
            </div>
         
        </div>
    )
}

export default Rec;