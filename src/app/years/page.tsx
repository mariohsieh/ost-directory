import { API_HISTORY_ENDPOINT } from '@/constants';

interface PledgeClassDisplay {
  year: string,
  pledgeClass: string
}

async function getAllPledgeYears(): Promise<PledgeClassDisplay[]> {
  'use cache';

  const url = `${process.env.API_BASE_URL}${API_HISTORY_ENDPOINT}?show=year,pledgeClass`;
  let pledgeYears;

  try {
    const response = await fetch(url);
    pledgeYears = await response.json();
  } catch (err) {
    console.log('error getting all pledge years', err)
  }

  console.log('GET /history api response', {
    method: 'GET',
    url,
    response: pledgeYears
  });
  return pledgeYears;
}

export default async function AllPledgeYearsPage() {
  let pledgeYears: PledgeClassDisplay[];

  try {
    pledgeYears = await getAllPledgeYears();
    console.log('getAllPledgeYears response', pledgeYears);
  } catch (err) {
    console.log('getAllPledgeYears error', err);
  }

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
