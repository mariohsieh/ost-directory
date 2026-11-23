'use client';

import { useEffect, useState } from 'react';

// interface ProfileProps {
//   url: string;
// }

// export default function Profile({ url }: ProfileProps ) {
export default function Profile() {

  useEffect(() => {
    async function getMembers() {
      try {
        const response = await fetch('/api/members');
        const data = await response.json();

        console.log('data', data);

      } catch (err) {
        console.log('err', err);
      }
    }
    getMembers();
  }, []);

  return (
    <div className='flex flex-col'>
      <header></header>
      <main>
        <h1>Profile Page</h1>
      </main>
      <footer>
        {/*  footer component here */}
      </footer>
    </div>
  );
}
