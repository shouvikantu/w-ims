import Head from 'next/head'
import Header from '@/components/Header'
import EventCreation from '@/components/EventCreation'
import Login from '@/components/Login'



export default function Home() {
  return (
    <>
      <Head>
        <title>ITS</title>
        <meta name="description" content="A tracking & Management system for Willamette University's intramural Program" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-amber-800'>
        <Login />
        {/* <Header />
        <EventCreation /> */}
      </div>
    </>
  )
}
