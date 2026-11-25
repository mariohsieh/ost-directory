'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | string>('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className='bg-black text-gray-400 flex justify-center'>
      <p className='text-sm' suppressHydrationWarning>
        &copy; {currentYear} Omega Sigma Tau. All rights reserved.
      </p>
    </footer>
  );
}
