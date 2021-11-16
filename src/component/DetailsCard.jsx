import React, { useState } from 'react'
import Details from '../api/details'
import { Detailscard, DetailscardGrowth } from '../styles/Details.styled'
const DetailsCard = () => {
    const [detailsData] = useState(Details)
    return (
        <>
            {
                detailsData.map((curElem) => {

                    const { id, title, no, image, imageAlt, status, icon, iconAlt, stats } = curElem;
                    return (
                        <Detailscard key={id}>
                            <p>{title}</p>
                            <img src={image} alt={imageAlt} />
                            <h1>{no}</h1>
                            <DetailscardGrowth>
                                <img src={icon} alt={iconAlt} />
                                <p className={status}>{stats}</p>
                            </DetailscardGrowth>
                        </Detailscard>
                    )
                })
            }
        </>
    )
}

export default DetailsCard
