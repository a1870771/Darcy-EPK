import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/EpkFooter'
import Link from 'next/link'

export default function Home() {
  return (
  <>
    <Head>
      <title>home | Darcy James Cheatle</title>
    </Head>
    <div className='container mx-auto px-5'>
      <Header />
      <div className="border-[6px] border-[#f8af34] rounded-md  shadow-xl flex flex-col md:flex-row gap-8 px-4 py-4 my-12 bg-[#361a17] md:mx-60 hover:shadow-2xl">
      <Image src={'/waiting-for-the-sunshine.jpg'} className='w-full inline-flex items-center justify-center md:w-[250px] md:h-[250px]'  width={250} height={250}/>
        <h1 className="text-3xl text-center font-[bold] md:w-[500px] md:py-20">Waiting For The Sunshine, new album out now</h1>
        <div className='flex flex-col gap-3'>
          <p className='font-[bold] md:pt-20'>Available on:</p>
            <div className='flex flex-row gap-4'>
            <Link target='_blank' href='https://www.youtube.com/watch?v=23Kps_tmxjU'>
              <Image src={'/spotify.png'} width={30} height={30} />
            </Link>
            <Link target='_blank' href='https://youtu.be/UHQZ2sbo68g?si=KFWrjpgPZiltmeOC'>
              <Image src={'/yt.png'} width={30} height={30} />
            </Link>
              {/*<Link target='_blank' href=''>
                <Image src={'/drive.png'} width={30} height={30} />
              </Link>*/}
            </div>
          </div>
        </div>
        
      <Image className="mb-8 md:my-12" src="/007.JPG" width="1500" height="1000"/>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div> 
          <h3 className="mb-4 text-2xl lg:text-4xl font-[bold] leading-tight">
            A multi instrumentalist playing dusty RnB on Kaurna Land.
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 font-[medium]">
          Welcome<span className="font-[arial]">!</span> This website is the electronic press kit of the Adelaide based multi<span className="font-[arial]">-</span>instrumentalist Darcy James Cheatle.
          Herein you<span className="font-[arial]">'</span>ll find all of his music, his press shots and some live footage, as well as his story <span className="font-[arial]">(</span>in three different word counts<span className="font-[arial]">) </span> 
          and more than enough routes through which you can get in touch.
          </p>
          <div className="mb-4 md:mb-0 text-sm text-gray-500">
            Website last updated 24/03/2024
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}
