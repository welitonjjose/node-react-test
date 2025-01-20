'use client';

import { useEffect } from 'react';
import { isLogged } from '@/util/autenticate';
import Form from '@/components/people/form'


export default function Homepage() {
  useEffect(() => {
    if (!isLogged) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <Form />
    </div>
  );
}