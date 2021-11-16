import React, { useState } from 'react'
import overall from '../api/../api/overall'
import { Overallcard, OverallcardTitle, OverallcardGrowth   } from '../styles/Overall.styled'
const OverallCard = () => {
    const [stats] = useState(overall);
    return (
        <>
            {
                stats.map((curElem) => {
                    const { id, image, imageAlt, username, followerno, subheading, icon, status, iconAlt, stats } = curElem;
                    return (
                        < Overallcard key={id} >
                            <OverallcardTitle>
                                <img src={image} alt={imageAlt} />
                                <p>{username}</p>
                            </OverallcardTitle>
                            <h1>{followerno}</h1>
                            <h2>{subheading}</h2>
                            <OverallcardGrowth>
                                <img src={icon} alt={iconAlt} />
                                <p className={status}>{stats}</p>
                            </OverallcardGrowth>
                        </Overallcard>
                    )
                })
            }
        </>
    )
}

export default OverallCard
