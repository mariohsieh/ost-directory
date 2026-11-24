'use client';

import { Suspense } from 'react';
import { useParams } from 'next/navigation';

function SinglePledgeYearContent() {
  const params = useParams();
  const pledgeYear = params?.id;

  return (
    <div className='flex flex-col min-h-full'>
      <header className='container py-6'>
        <h1>pledge year: {pledgeYear}</h1>
      </header>
      <main className='flex-1'></main>
    </div>
  );
}

export default function SinglePledgeYear() {
  return (
    <Suspense fallback={<div className='container py-6'><p>Loading...</p></div>}>
      <SinglePledgeYearContent />
    </Suspense>
  );
}
