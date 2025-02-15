'use client';

import { useEffect } from 'react';
import { isLogged } from '../util/autenticate';


export default function Homepage() {
  useEffect(() => {
    if (!isLogged) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our website! This is the About page.</p>
    </div>
  );
}