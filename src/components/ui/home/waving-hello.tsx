'use client';

import { useEffect, useState } from 'react';

const greetings = [
  'Hello, world',
  'வணக்கம் மக்களே',
  'नमस्ते, दुनिया ',
  'Hallo, Welt',
  'Bonjour, monde',
  'Привет, мир',
];

export const WavingHello = () => {
  const [hello, setHello] = useState(0);
  useEffect(() => {
    const changeHello = setInterval(() => {
      setHello((helloo) => (helloo >= greetings.length - 1 ? 0 : helloo + 1));
    }, 2500);
    return () => clearInterval(changeHello);
  }, []);
  return <>&nbsp;&nbsp;{greetings[hello]}!</>;
};
