'use client';

import { useEffect, useState } from 'react';

export default function Profile() {
  useEffect(() => {
    async function getMembers() {
      try {
        const response = await fetch('/api/members');
        const data = response.json();
        console.log('data', data);
      } catch (err) {
        console.log('err', err);
      }
    }
    getMembers();
  });

  return (
    <>
      <h1>Profile Page</h1>
    </>
  );
}
