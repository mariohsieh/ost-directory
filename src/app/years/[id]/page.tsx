'use client'

import { useParams } from 'next/navigation';

export default function SinglePledgeYear() {
  const params = useParams();
  const pledgeYear = params.id;

  return (
    <main>
      <h1>one single pledge year: { pledgeYear }</h1>
    </main>
  );
}
