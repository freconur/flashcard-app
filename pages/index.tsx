import { useAuthUser, withAuthUser } from 'next-firebase-auth'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header/Header'
import InfoStudyCards from '../components/InfoStudyCards/InfoStudyCards'
import LayoutCenterContent from '../layout/LayoutCenterContent'
import Footer from '../components/Footer/Footer'

const Home = () => {

  return (
    <div>
      <Head>
        <title>Waliky store</title>
        <meta name="description" content="custom cup description" />
      </Head>
      <Navbar />
        <Header />
        <InfoStudyCards />
        <Footer/>
    </div>
  )
}
export default withAuthUser()(Home)//funciona en client