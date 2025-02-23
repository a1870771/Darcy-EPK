import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Footer from '@/components/EpkFooter'
import Image from 'next/image';
import dynamic from 'next/dynamic'
 const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
// import ReactPlayer from 'react-player/youtube'
 
export default function Home() {
  return (
  <>
    <Head>
      <title>media | Darcy James Cheatle</title>
    </Head>
    <div className='container mx-auto px-5'>
      <Header />
      <h1 className='text-5xl -pt-8 md:pt-16 pb-4 text-center font-[bold]'>Videos</h1>
    <div className="flex flex-col lg:grid lg:grid-cols-2 md:gap-x-16 lg:gap-x-40 lg:my-16">
        <div className="border-[6px] border-[#f8af34] rounded-md shadow-xl flex flex-col gap-8 px-8 py-8 mb-8 bg-[#361a17] hover:shadow-2xl">
          <ReactPlayer url='https://www.youtube.com/watch?v=kKAd-T1pAQc' width="[100vw]" controls='true'/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">Turnaround (Music Video)</h1>
            <p><span className='font-bold'>Recorded: </span>Dec 2024</p>
            <p><span className='font-bold'>Directed by: </span>Ziggy and Darcy James Cheatle</p>
            <p><span className='font-bold'>Filmed by: </span>Ziggy</p>
            <p className='font-bold'>Mp4 available upon request</p>
          </div>
        </div>
        <div className="border-[6px] border-[#f8af34] rounded-md   shadow-xl flex flex-col gap-8 px-8 py-8 mb-8 bg-[#361a17] hover:shadow-2xl">
          <ReactPlayer url='https://www.youtube.com/watch?v=wTV7xkPqzp8' width="[100vw]"  controls='true'/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">Slip Away (Acoustic Performance)</h1>
            <p><span className='font-bold'>Recorded: </span>Jan 2024</p>
            <p><span className='font-bold'>Shot by: </span>Darcy James Cheatle</p>
            <p className='font-bold'>Mp4 available upon request</p>
          </div>
        </div>
      </div>




      <p className='text-5xl text-center pb-0 -pt-8 md:pt-16 md:pb-4 font-[bold]'>Photos</p>
      <p className='text-center pb-8 text-gray-500 font-[medium]'>Open in new tab for full resolution</p>
      <div className="max-w-7xl mx-auto pb-20 md:pb-16 px-4 sm:pb-24 sm:px-6 max-w-[75vw] lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/001.JPEG' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/002.JPEG' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/003.JPEG' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/004.JPEG' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/005.JPEG' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/006.JPG' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/007.JPG' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/008.JPG' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/009.JPEG' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/010.JPEG' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>

        </div>
      </div>


    </div>
    
    <Footer />
  </>
  )
}


