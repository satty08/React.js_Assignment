import React from 'react';
import './About.css'

function About() {
    return (
        <div className='about'>
            <div className='side'></div>
            <div className='main'>
                <div className='heading'>
                    <h1>About</h1>
                    <h3>The Project</h3>
                    <img className='img' src='https://uploads-ssl.webflow.com/61696b2b0a85229591cdc5b0/6169b9512859a4b0df5b23b5_image%2040.jpg' alt='' />
                </div>
                <div className='content'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className='side'></div>
        </div>
    )
}

export default About
