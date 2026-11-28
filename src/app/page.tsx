import MainHeader from '@/components/main-header';
import SearchResult from '@/components/search-result';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <MainHeader></MainHeader>
      <SearchResult></SearchResult>
    </div>
  );
}
