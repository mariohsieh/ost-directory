'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | string>('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // if (!currentYear) {
  //   return ('');
  // }

  return (
    <footer className='bg-black text-gray-400 border-t border-zinc-800'>
      <p className='text-sm text-gray-500' suppressHydrationWarning>
        &copy; {currentYear} Omega Sigma Tau. All rights reserved.
      </p>
    </footer>
  );
}
