import MainHeader from '@/components/main-header';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <MainHeader></MainHeader>
      <main className='flex-1 flex flex-col items-center justify-between bg-gray-500'>
        <p>display results here....</p>
      </main>
    </div>
  );
}
