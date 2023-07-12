import { useAuthUser, withAuthUser } from 'next-firebase-auth'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header/Header'

const Home = () => {
  
  return (
    <div>
      <Head>
        <title>Waliky store</title>
        <meta name="description" content="custom cup description" />
      </Head>
      <Navbar/>
      <Header/>
    </div>
  )
}
export default withAuthUser()(Home)//funciona en client