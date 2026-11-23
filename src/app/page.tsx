import Image from "next/image";
import searchIcon from "./assets/search-icon.svg";

export default function Home() {
  // const currentDate: Date = new Date();
  // const currentYear: number = currentDate.getFullYear();

  return (
    <div className="flex flex-col">
      <header className="bg-black">
        <div className="container flex items-center justify-between">
          <section className="header-title">
            <h2>
              <span className="font-[GFS_Didot] text-blue-400 mr-[20px]">ΩΣΤ</span>
              <span className="text-gray-400">DIRECTORY</span>
            </h2>
          </section>
          <section className="">
            <form className="flex">
              <input className="border-none bg-white text-black text-2xl py-2 px-3 mr-3" type="search" name="search-input" placeholder="Search by name" />
              <button className="size-11 cursor-pointer border-none bg-blue-400 rounded-full flex items-center justify-center" type="button">
                <Image className="size-6" src={searchIcon} alt="search icon" />
              </button>
            </form>
          </section>
          <section>

          </section>
        </div>
      </header>
      <main className="flex flex-col items-center justify-between bg-gray-500">
        main element
      </main>
      <footer>
        {/* &copy; {currentYear} Omega Sigma Tau */}
        // use a static site generation to render footer element
      </footer>
    </div>
  );
}
