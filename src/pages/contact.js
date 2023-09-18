import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '@/components/EpkFooter'
import EmailForm from '@/components/EmailForm'

export default function Home() {
  return (
    <>
    <Head>
      <title>contact | Darcy James Cheatle</title>
    </Head>
    <div className='container mx-auto px-5'>
      <Header />
      <div className="md:grid md:grid-cols-2 min-h-[75vh] md:gap-x-16 lg:gap-x-40 md:my-20 md:my-28">
        <div className='mb-8'>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            Contact Darcy
          </h3>
          <p className="text-lg leading-relaxed mb-4">
          Please feel free to reach out via any of the following links to get in touch, or send an email using the form on the right!
          </p>
          <div className='mt-8 flex flex-col'>
            <Link href='https://www.instagram.com/darcyjamescheatle/' target="_blank" className='hover:underline'>Instagram</Link>
            <Link href='https://www.facebook.com/people/Darcy-Cheatle/100004796087040/' target="_blank" className='hover:underline'>Facebook</Link>
            <Link href='https://www.youtube.com/c/DarcyJamesCheatle' target="_blank" className='hover:underline'>YouTube</Link>
          </div>
        </div>
        <EmailForm/>
      </div>

    </div>
    <Footer/>
    </>
  )
};
