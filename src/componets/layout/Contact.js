import React from 'react';
import '../../App.css';
import '../styles/Contact.css';

const ContactList = () => {
  const contacts = [
    {
      name: 'Jason Price',
      email: 'kuhlman.jermey@yahoo.com',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      name: 'Duane Dean',
      email: 'rusty.botsford@wilfrid.io',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc999a675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      name: 'Jonathan Barker',
      email: 'cora_haley@quinn.biz',
      imageUrl: 'https://images.unsplash.com/photo-1500462918059-924a66a9c074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      name: 'Rosie Glover',
      email: 'lockman.marques@hotmail.com',
      imageUrl: 'https://images.unsplash.com/photo-1494790108372-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      name: 'Patrick Greer',
      email: 'pearlie.eichmann@trevion.net',
      imageUrl: 'https://images.unsplash.com/photo-1500462918059-924a66a9c074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      name: 'Darrell Ortega',
      email: 'chaya.shields@ferry.info',
      imageUrl: 'https://images.unsplash.com/photo-1500462918059-924a66a9c074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <div key={contact.email} className="bg-white rounded-md shadow-md p-4">
            <img
              src={contact.imageUrl}
              alt={contact.name}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h2 className="text-xl font-bold mb-1">{contact.name}</h2>
            <p className="text-gray-600 mb-2">{contact.email}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
