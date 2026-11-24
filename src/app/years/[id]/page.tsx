'use client';

import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { API_HISTORY_ENDPOINT } from '@/constants';
import { PledgeClassType } from '@/types';

function SinglePledgeYearContent() {
  const params = useParams();
  const pledgeYear = params?.id;
  const [pledgeYearData, setPledgeYearData] = useState<PledgeClassType>();

  useEffect(() => {
    async function getAllPledgeYears() {
      try {
        const response = await fetch(`${API_HISTORY_ENDPOINT}?range=${pledgeYear}`);
        const data: PledgeClassType[] = await response.json();
        setPledgeYearData(data[0]);


        console.log('pledge year info', data[0]);


      } catch (err) {
        console.log('err', err);
      }
    }
    getAllPledgeYears();
  }, []);

  function displayPledgeClassInfo() {
    if (pledgeYearData) {
      return (
        <ul>
          <li>pledge class info</li>
          <li>Year: { pledgeYearData.year }</li>
          <li>Name: { pledgeYearData.pledgeClass }</li>
          <li>President: { pledgeYearData.president }</li>
          <li>Pledge Mom: { pledgeYearData.pledgeMom }</li>
          <li>Members: { pledgeYearData.members.map((item, index) => <div key={index}>{item.name}</div>) }
          </li>
        </ul>
      );
    }
  }

  return (
    <div className='flex flex-col'>
      <header className='bg-black container flex items-center justify-between'>
        <h1>pledge year: {pledgeYear}</h1>
      </header>
      <main className='flex-1'>
        { displayPledgeClassInfo() }
      </main>
    </div>
  );
}

export default function SinglePledgeYearPage() {
  return (
    <Suspense fallback={<></>}>
      <SinglePledgeYearContent />
    </Suspense>
  );
}
