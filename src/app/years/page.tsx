'use client';

import { useEffect, useState } from 'react';

export default function AllPledgeYears() {
  const [pledgeYears, setPledgeYears] = useState([]);

  useEffect(() => {
    async function getAllPledgeYears() {
      try {
        const response = await fetch('/api/history');
        const data = await response.json();

        console.log('AllPledgeYears: api response', data);
        setPledgeYears(data);
      } catch (err) {
        console.log('err', err);
      }
    }
    getAllPledgeYears();
  }, []);

  function displayPledgeYears() {
    if (pledgeYears?.length > 0) {
      return (
        <ul>
          { pledgeYears.map((item) => <li key={item}>{item}</li>) }
        </ul>
      );
    }
    return ('');
  }

  return (
    <main>
      <h1>list of all pledge years</h1>
      { displayPledgeYears() }
    </main>
  );
}
