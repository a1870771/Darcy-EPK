import Navbar from '@/components/EpkNavbar'

export default function Header() {
    return (
      <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 md:mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Darcy James Cheatle.
        </h1>
        <h4 className="hidden md:flex text-gray-500 md:text-center md:text-left text-lg mt-5 md:pl-8">
          Electronic Press Kit
        </h4>
      </section>
      <Navbar/>
      </>
    )
  }