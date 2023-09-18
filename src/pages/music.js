import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '@/components/EpkFooter'
import Image from 'next/image'
export default function Music() {
  return (
  <>
    <Head>
      <title>music | Darcy James Cheatle</title>
    </Head>
    <div className="container mx-auto px-5">
      <Header />
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-40 lg:my-28">
        

        
        
        <div className="border-[6px] border-[#f8af34] rounded-md  shadow-xl flex flex-col md:flex-row gap-8 px-8 py-8 mb-8 bg-[#361a17] hover:shadow-2xl">
          <Image src={'/smokeys-ii.JPG'} className='w-full inline-flex items-center justify-center md:w-[250px]'  width={250} height={250}/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">Smokeys II (Album)</h1>
            <p><span className='font-bold'>Released: </span>2021</p>
            <p><span className='font-bold'>Written by: </span>Darcy Cheatle</p>
            <p><span className='font-bold'>Produced by: </span>Samael Cole</p>
            <p className='font-bold'>Available on:</p>
              <div className='flex flex-row gap-4'>
              <Link target='_blank' href='https://open.spotify.com/album/2YU6ZKqQcHvvZTXri5UApj?si=3Vf7K0F0SkykzE9k8Dg1bg'>
                <Image src={'/spotify.png'} width={30} height={30} />
              </Link>
              <Link target='_blank' href=''>
                <Image src={'/yt.png'} width={30} height={30} />
              </Link>
              {/*<Link target='_blank' href=''>
                <Image src={'/drive.png'} width={30} height={30} />
              </Link>*/}
              </div>
          </div>
        </div>





        <div className="border-[6px] border-[#f8af34] rounded-md shadow-xl flex flex-col md:flex-row gap-8 px-8 py-8 mb-8 bg-[#361a17] hover:shadow-2xl">
          <Image src={'/smokeys-lp.jpg'} className='w-full inline-flex items-center justify-center md:w-[250px]'  width={250} height={250}/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">Smokeys LP (Album)</h1>
            <p><span className='font-bold'>Released: </span>2020</p>
            <p><span className='font-bold'>Written by: </span>Darcy Cheatle</p>
            <p><span className='font-bold'>Produced by: </span>Darcy Cheatle</p>
            <p className='font-bold'>Available on:</p>
              <div className='flex flex-row gap-4'>
              <Link target='_blank' href='https://open.spotify.com/album/0cjJQJPYPtacba51SqFxDX?si=6gAEeb4fT2uIToPRfCTyKw'>
                <Image src={'/spotify.png'} width={30} height={30} />
              </Link>
              <Link target='_blank' href='https://www.youtube.com/watch?v=taGFpqu6WEs'>
                <Image src={'/yt.png'} width={30} height={30} />
              </Link>
              {/*<Link target='_blank' href=''>
                <Image src={'/drive.png'} width={30} height={30} />
              </Link>*/}
              </div>
          </div>
        </div>



        
        
        
        
        <div className="border-[6px] border-[#f8af34] rounded-md shadow-xl flex flex-col md:flex-row gap-8 px-8 py-8 mb-8 bg-[#361a17] hover:shadow-2xl">
          <Image src={'/slip-away.jpeg'} className='w-full inline-flex items-center justify-center md:w-[250px]' width={250} height={250}/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">Slip Away (Single)</h1>
            <p><span className='font-bold'>Released: </span>2020</p>
            <p><span className='font-bold'>Written by: </span>Darcy Cheatle</p>
            <p><span className='font-bold'>Produced by: </span>Darcy Cheatle</p>
            <p className='font-bold'>Available on:</p>
              <div className='flex flex-row gap-4'>
              <Link target='_blank' href='https://open.spotify.com/album/6au4gmLYwwy0VEvDwvh5yb?si=LHe3lotJTe6PF397etWVug'>
                <Image src={'/spotify.png'} width={30} height={30} />
              </Link>
              <Link target='_blank' href='https://www.youtube.com/watch?v=VGzlfftcePA'>
                <Image src={'/yt.png'} width={30} height={30} />
              </Link>
              {/*<Link target='_blank' href=''>
                <Image src={'/drive.png'} width={30} height={30} />
              </Link>*/}
              </div>
          </div>
        </div>





        <div className="border-[6px] border-[#f8af34] rounded-md  shadow-xl flex flex-col md:flex-row gap-8 px-8 py-8 mb-8 bg-[#361a17] hover:shadow-2xl">
          <Image src={'/never-gonna-stay.jpg'} className='w-full inline-flex items-center justify-center md:w-[250px]'  width={250} height={250}/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">Never Gonna Stay (Single)</h1>
            <p><span className='font-bold'>Released: </span>2020</p>
            <p><span className='font-bold'>Written by: </span>Darcy Cheatle</p>
            <p><span className='font-bold'>Produced by: </span>Samael Cole</p>
            <p className='font-bold'>Available on:</p>
              <div className='flex flex-row gap-4'>
              <Link target='_blank' href='https://open.spotify.com/album/0cjJQJPYPtacba51SqFxDX?si=6gAEeb4fT2uIToPRfCTyKw'>
                <Image src={'/spotify.png'} width={30} height={30} />
              </Link>
              <Link target='_blank' href='https://www.youtube.com/watch?v=taGFpqu6WEs'>
                <Image src={'/yt.png'} width={30} height={30} />
              </Link>
              {/*<Link target='_blank' href=''>
                <Image src={'/drive.png'} width={30} height={30} />
              </Link>*/}
              </div>
          </div>
        </div>







      </div>
    </div>
    <Footer/>
  </>
  )
}
