import React from 'react';
import '../../App.css';
import '../styles/Table.css'; // Assuming you're using the same styles for the Team component

function TeamMember({ name, title, email, imageSrc }) {
  return (
    <div className="team-member">
      <img src={imageSrc} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}

function Team() {
  const teamMembers = [
    {
      name: 'Jason Price',
      title: 'Admin',
      email: 'janick_parisian@yahoo.com',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Jukkoe Sisao',
      title: 'CEO',
      email: 'sibyl_kozey@gmail.com',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Harriet King',
      title: 'CTO',
      email: 'nadia_block@hotmail.com',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Lenora Benson',
      title: 'Lead',
      email: 'feil.wallace@kunde.us',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Olivia Reese',
      title: 'Strategist',
      email: 'kemmer.hattie@cremin.us',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Bertha Valdez',
      title: 'CEO',
      email: 'loraine.koelpin@tromp.io',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Harriett Payne',
      title: 'Digital Marketer',
      email: 'nannie_west@estrella.tv',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'George Bryant',
      title: 'Social Media',
      email: 'delmer.kling@gmail.com',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Lily French',
      title: 'Strategist',
      email: 'lucienne.herman@hotmail.com',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Howard Adkins',
      title: 'CEO',
      email: 'wiegand.leonor@herman.us',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Earl Bowman',
      title: 'Digital Marketer',
      email: 'waino_altenwerth@nicolette.tv',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Patrick Padilla',
      title: 'Social Media',
      email: 'octavia.nienow@gleichner.net',
      imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0428a226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <div className="team">
      <h2>Table</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <button>Add New Member</button>
    </div>
  );
}

export default Team;
