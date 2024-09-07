import React from 'react';
import '../../App.css';
import '../styles/Inbox.css';

// Define the teamMembers data separately
const teamMembers = [
  {
    name: 'Jason Price',
    title: 'Admin',
    email: 'janick_parisian@yahoo.com',
    image: 'https://www.example.com/jason.jpg', // Replace with actual image URL
  },
  {
    name: 'Jukkoe Sisao',
    title: 'CEO',
    email: 'sibyl_kozey@gmail.com',
    image: 'https://www.example.com/jukkoe.jpg', // Replace with actual image URL
  },
  {
    name: 'Harriet King',
    title: 'CTO',
    email: 'nadia_block@hotmail.com',
    image: 'https://www.example.com/harriet.jpg', // Replace with actual image URL
  },
  {
    name: 'Lenora Benson',
    title: 'Lead',
    email: 'feil.wallace@kunde.us',
    image: 'https://www.example.com/lenora.jpg', // Replace with actual image URL
  },
  {
    name: 'Olivia Reese',
    title: 'Strategist',
    email: 'kemmer.hattie@cremin.us',
    image: 'https://www.example.com/olivia.jpg', // Replace with actual image URL
  },
  {
    name: 'Bertha Valdez',
    title: 'CEO',
    email: 'loraine.koelpin@tromp.io',
    image: 'https://www.example.com/bertha.jpg', // Replace with actual image URL
  },
  {
    name: 'Harriett Payne',
    title: 'Digital Marketer',
    email: 'nannie_west@estrella.tv',
    image: 'https://www.example.com/harriett.jpg', // Replace with actual image URL
  },
  {
    name: 'George Bryant',
    title: 'Social Media',
    email: 'delmer.kling@gmail.com',
    image: 'https://www.example.com/george.jpg', // Replace with actual image URL
  },
  {
    name: 'Lily French',
    title: 'Strategist',
    email: 'lucienne.herman@hotmail.com',
    image: 'https://www.example.com/lily.jpg', // Replace with actual image URL
  },
  {
    name: 'Howard Adkins',
    title: 'CEO',
    email: 'wiegand.leonor@herman.us',
    image: 'https://www.example.com/howard.jpg', // Replace with actual image URL
  },
  {
    name: 'Earl Bowman',
    title: 'Digital Marketer',
    email: 'waino_altenwerth@nicolette.tv',
    image: 'https://www.example.com/earl.jpg', // Replace with actual image URL
  },
  {
    name: 'Patrick Padilla',
    title: 'Social Media',
    email: 'octavia.nienow@gleichner.net',
    image: 'https://www.example.com/patrick.jpg', // Replace with actual image URL
  },
];

const Team = () => {
  return (
    <div className="container">
      <h1 className="title">Team</h1>
      <button className="add-member-btn">Add New Member</button>
      <div className="grid">
        {teamMembers.map((member) => (
          <div className="card" key={member.name}>
            <div className="card-header">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="card-body">
              <h2>{member.name}</h2>
              <p>{member.title}</p>
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Team />
    </div>
  );
}

export default App;
