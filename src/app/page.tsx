import Image from 'next/image';
import searchIcon from '../../public/search-icon.svg';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <header className='bg-black container flex items-center justify-between'>
        <section className='header-title'>
          <h2 className='flex items-center'>
            <span className='font-[GFS_Didot] text-6xl text-blue-400 mr-[20px]'>ΩΣΤ</span>
            <span className='text-gray-400'>DIRECTORY</span>
          </h2>
        </section>
        <section className=''>
          <form className='flex'>
            <input className='border-none bg-white text-black text-2xl py-2 px-3 mr-3' type='search' name='search-input' placeholder='Search by name' />
            <button className='size-11 cursor-pointer border-none bg-blue-400 rounded-full flex items-center justify-center' type='button'>
              <Image className='size-6' src={searchIcon} alt='search icon' />
            </button>
          </form>
        </section>
        <section>
          <p className='text-white'>filter options</p>
        </section>
      </header>
      <main className='flex-1 flex flex-col items-center justify-between bg-gray-500'>
        <p>display results here....</p>
      </main>
    </div>
  );
}
