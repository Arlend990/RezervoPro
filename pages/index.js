import React from 'react';

export default function Home() {
  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>RezervoPro</h1>
      <p>Welcome to RezervoPro, your platform to book appointments with professionals in Albania.</p>
      <ul>
        <li>Barbers</li>
        <li>Beauty Salons</li>
        <li>Dentists</li>
        <li>Gyms</li>
        <li>Tutors</li>
      </ul>
      <p>More features coming soon!</p>
    </div>
  );
}
