'use client';

import { useState } from 'react';
import Image from 'next/image';
import searchIcon from '../../public/search-icon.svg';
import { API_HISTORY_ENDPOINT } from '@/constants';
import { PledgeClassType } from '@/types';

export default function MainHeader() {
  const [searchName, setSearchName] = useState<string>('');

  async function getSearchResults() {
    console.log('getSearchResults searchName:', searchName);

    try {
      const response = await fetch(`${API_HISTORY_ENDPOINT}?name=${searchName}&type=year,pledgeClass,members`);
      const data: PledgeClassType[] = await response.json();


      console.log('>>>>>>>>>>>>>>>>>>>>>>>> search results', data);


      // update redux state here with results
    } catch (err) {
      console.log('err', err);
    }
  }

  function handleClick() {
    setSearchName(searchName);
    getSearchResults();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchName(searchName);
    getSearchResults();
  }

  return (
    <header className='bg-black container flex items-center justify-between'>
      <section className='header-title'>
        <h2 className='flex items-center'>
          <span className='font-[GFS_Didot] text-6xl text-blue-400 mr-[20px]'>ΩΣΤ</span>
          <span className='text-gray-400 font-extrabold tracking-widest'>DIRECTORY</span>
        </h2>
      </section>
      <section className=''>
        <form className='flex' onSubmit={handleSubmit}>
          <input className='border-none bg-white text-black text-2xl py-2 px-3 mr-3' type='search' name='searchName' value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder='Search by name' />
          <button className='size-11 cursor-pointer border-none bg-blue-400 rounded-full flex items-center justify-center' type='button' onClick={handleClick}>
            <Image className='size-6' src={searchIcon} alt='search icon' />
          </button>
        </form>
      </section>
      <section>
        <p className='text-white'>filter options</p>
      </section>
    </header>
  );
}
