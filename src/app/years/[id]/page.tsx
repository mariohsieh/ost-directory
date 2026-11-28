export const instant = false;

import { API_HISTORY_ENDPOINT } from '@/constants';
import { PledgeClassType } from '@/types';

async function getPledgeYearData(year: string): Promise<PledgeClassType> {
  const url = `${process.env.API_BASE_URL}${API_HISTORY_ENDPOINT}?range=${year}`;
  let pledgeYearData;

  try {
    const response = await fetch(url);
    pledgeYearData = await response.json();


    console.log('GET /history api response', {
      method: 'GET',
      url,
      response: pledgeYearData
    });


  } catch (err) {
    console.log('err', err);
  }

  return pledgeYearData?.[0];
}

function displayPledgeClassInfo(pledgeYearData: PledgeClassType) {
  return (
    <ul>
      <li>Year: { pledgeYearData.year }</li>
      <li>Name: { pledgeYearData.pledgeClass }</li>
      <li>President: { pledgeYearData.president }</li>
      <li>Pledge Mom: { pledgeYearData.pledgeMom }</li>
      <li>Members: { pledgeYearData.members.map((item, index) => <div key={index}>{item.name}</div>) }
      </li>
    </ul>
  );
}

export default async function SinglePledgeYearPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  let pledgeYearData;

  try {
    const { id } = await params;
    pledgeYearData = await getPledgeYearData(id);
    console.log('pledgeYearData', pledgeYearData);
  } catch (err) {
    console.log('err', err);
  }

  if (pledgeYearData) {
    return (
      <div className='flex flex-col'>
        <header className='bg-black container flex items-center justify-between'>
          <h1>pledge class: { pledgeYearData.pledgeClass }, pledge year: {pledgeYearData.year}</h1>
        </header>
        <main className='flex-1'>
          { displayPledgeClassInfo(pledgeYearData) }
        </main>
      </div>
    );
  }
}
