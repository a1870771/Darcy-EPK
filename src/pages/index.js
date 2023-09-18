import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/EpkFooter'

export default function Home() {
  return (
  <>
    <Head>
      <title>home | Darcy James Cheatle</title>
    </Head>
    <div className='container mx-auto px-5'>
      <Header />
      <Image className="mb-8 md:my-12" src="/003.JPG" width="1500" height="1000"/>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div> 
          <h3 className="mb-4 text-3xl lg:text-4xl font-[bold] leading-tight">
            A multi instrumentalist playing dusty RnB on Kaurna Land.
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">
          Welcome! This website is the electronic press kit of the Adelaide based multi-instrumentalist Darcy James Cheatle.
          Herein you'll find all of his music, his press shots and some live footage, as well as his story (in three different word counts)
          and more than enough routes through which you can get in touch.
          </p>
          <div className="mb-4 md:mb-0 text-sm text-gray-500">
            Website last updated 11/9/2023
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}
