import React from 'react'
import './index.css'


const index = (props) => {
    const{placeDetails}=props
    const{imgUrl,name}=placeDetails

  return (
    <li className='place-item'>
        <img src={imgUrl} alt={name} className='place-img'/>
        <p className='name'>{name}</p>

    </li>
  )
}

export default index