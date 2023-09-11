import Navbar from '@/components/EpkNavbar'
import Image from 'next/image'


export default function Header() {
    return (
      <>
        <div className='flex flex-col md:flex-row items-center my-8 md:justify-between px-8'>
          <Image src={'/logo_darcy.png'} width={200} height={200}/>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
            Welcome to Darcy James Cheatle.
          </h1>
        </div>
      <Navbar/>
      </>
    )
  }