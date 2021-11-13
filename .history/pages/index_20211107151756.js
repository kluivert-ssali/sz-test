import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import { getSession } from 'next-auth/client';
import Sidebar from '../components/Sidebar';



export default function Home({ session }) {
  //if (!session) return <Login />;
  return (
    <div className="h-screen bg-purple-100 overflow-hidden" >
      <Head>
        <title>Szone</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="flex">
        {/* sidebar */} 
        <Sidebar />
        {/* Feed */}
        {/* widgets */}
      </main>
    </div>

      
  )
}

export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}