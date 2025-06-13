'use client';
import { useEffect } from 'react';

export default function TawkTo() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const s1 = document.createElement('script');
      s1.async = true;
      s1.src = 'https://embed.tawk.to/684bc671e510fd190c855862/1itjvub7h';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');

      const s0 = document.getElementsByTagName('script')[0];
      s0.parentNode.insertBefore(s1, s0);
    }, 5000); // Delay for 5 seconds

    return () => clearTimeout(timeout); // Clean up if component unmounts
  }, []);

  return null;
};