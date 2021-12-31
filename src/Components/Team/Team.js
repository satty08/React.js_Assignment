import React from 'react';
import './Team.css';
import TeamCard from './TeamCard';

function Team() {

    const data = [
        {
            name: 'Jason',
            job: 'CEO',
            img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },

        {
            name: 'Will',
            job: 'HR',
            img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'Steve',
            job: 'Web Developer',
            img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'Sam',
            job: 'Backend Developer',
            img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
    ]

   
    return (
        <div className='team'>
            <h1>Meet Our Team</h1>
            <div className='teamData'>
            {data.map(ele => (
                <TeamCard 
                    img={ele.img}
                    name={ele.name}
                    job={ele.job}
                />
                    
            ))}
            </div>
        </div>
    )
}

export default Team
