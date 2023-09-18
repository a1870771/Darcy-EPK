import Navbar from '@/components/EpkNavbar'
import Image from 'next/image'


export default function Header() {
    return (
      <>
        <div className='flex flex-col md:flex-row items-center gap-8 my-8 md:justify-between px-16'>
          <Image src={'/logo_darcy.png'} width={220} height={200}/>
          <h1 className="hidden text-6xl md:visible md:text-right font-[extra-wide] leading-tight">
            Welcome to Darcy James Cheatle.
          </h1>
        </div>
      <Navbar/>
      </>
    )
  }