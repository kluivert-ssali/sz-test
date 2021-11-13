import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import { getSession } from 'next-auth/client';



export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Szone</title>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* sidebar */} 
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