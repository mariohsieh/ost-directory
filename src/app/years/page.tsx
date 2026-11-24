'use client';

import { useEffect, useState } from 'react';
import { API_HISTORY_ENDPOINT } from '@/constants';

export default function AllPledgeYears() {
  const [pledgeYears, setPledgeYears] = useState([]);

  useEffect(() => {
    async function getAllPledgeYears() {
      try {
        const response = await fetch(`${API_HISTORY_ENDPOINT}?type=year`);
        const data = await response.json();
        setPledgeYears(data.map((item: {year: string}) => item.year));


        console.log('all pledge years', data.map((item: {year: string}) => item.year));


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
          { pledgeYears.map((item: string) => <li key={item}>{item}</li>) }
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
