import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PoolConfigurator from '../components/PoolConfigurator';
import PoolMaintenance from '../components/PoolMaintenance';
import AboutUs from '../components/AboutUs';
import WhyWe from '../components/WhyWe';
import Gallery from '../components/Gallery';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { Fragment } from 'react';
import HeadTitle from '../components/HeadTitle';
import Head from 'next/head';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Premium spa, ideja, dizajn, izgradnja i održavanje bazena"
        />
      </Head>
      <HeadTitle />
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <PoolConfigurator />
        <PoolMaintenance />
        <AboutUs />
        <WhyWe />
        <Gallery />
        <CallToAction />
        <Footer />
      </div>
    </Fragment>
  );
}
