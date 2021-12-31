import React from 'react'
import './TeamCard.css';

function TeamCard({img, name, job}) {
    return (
        <div className='teamCard'>
            <img className='dp' src={img} alt='' />
            <h2 className='text'>{name}</h2>
            <p className='text'>{job}</p>
        </div>
    )
}

export default TeamCard
