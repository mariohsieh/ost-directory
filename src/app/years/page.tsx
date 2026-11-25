'use client';

import { useEffect, useState } from 'react';
import { API_HISTORY_ENDPOINT } from '@/constants';

interface PledgeClassDisplay {
  year: string,
  pledgeClass: string
}

export default function AllPledgeYearsPage() {
  const [pledgeYears, setPledgeYears] = useState<PledgeClassDisplay[]>([]);

  useEffect(() => {
    async function getAllPledgeYears() {
      try {
        const response = await fetch(`${API_HISTORY_ENDPOINT}?type=year,pledgeClass`);
        const data: PledgeClassDisplay[] = await response.json();
        setPledgeYears(data);


        console.log('all pledge years', data);


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
          {
            pledgeYears.map((item: PledgeClassDisplay) =>
            <li key={item.year}>{item.year}: {item.pledgeClass}</li>)
          }
        </ul>
      );
    }
    return ('');
  }

  return (
    <div className='flex flex-col'>
      <header className='bg-black container flex items-center justify-between'>
        <h1>list of all pledge classes</h1>
      </header>
      <main>
        { displayPledgeYears() }
      </main>
    </div>
  );
}
