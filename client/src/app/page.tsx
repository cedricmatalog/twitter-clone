// Example for Next.js 13+ with app directory
'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <main>
      <h1>Next.js Client</h1>
      <p>Message from server: {message}</p>
    </main>
  );
}