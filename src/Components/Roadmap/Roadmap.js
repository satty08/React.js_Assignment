import React from 'react';
import './Roadmap.css';

function Roadmap() {

  const timelineData = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: 'February 25 2019',
        
		},
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: 'March 04 2019',
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: 'March 07 2019',
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: 'March 18 2019',
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: 'April 05 2019',
    }
]



const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <time>{data.date}</time>
            <p>{data.text}</p>
            
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );




  return(
    <div className='roadmap'>
      <h1 className='heading'>Roadmap 🚙</h1>
      <Timeline />
    </div>
  )
}

export default Roadmap
