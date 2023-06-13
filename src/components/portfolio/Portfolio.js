import React from 'react';
import InkWatchImage from '../../photos/InkWatch.png';
import PasswordImage from '../../photos/Password.png';
import MotivateImage from '../../photos/Motivate.png';
import WeatherDashImage from '../../photos/weatherdash.png';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Ink Watch', image: InkWatchImage },
    { id: 2, title: 'Password Generator', image: PasswordImage },
    { id: 3, title: 'Motivate Me', image: MotivateImage },
    { id: 4, title: 'Weather Dashboard', image: WeatherDashImage }
  ];

  const rows = [];
  const itemsPerRow = 2;
  for (let i = 0; i < projects.length; i += itemsPerRow) {
    const rowItems = projects.slice(i, i + itemsPerRow);
    rows.push(rowItems);
  }

  return (
    <section>
      <h2>My Portfolio</h2>
      <p>Here are a few of my projects:</p>
      {rows.map((row, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
          {row.map(project => (
            <div key={project.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ marginBottom: '10px' }}>{project.title}</h3>
              <div style={{ border: '2px solid #ddd', borderRadius: '8px', padding: '10px' }}>
                <img src={project.image} alt={project.title} style={{ width: '200px', height: '200px' }} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
