import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RoofConfigurator from '../components/RoofConfigurator';
import RoofMaintenance from '../components/RoofMaintenance';
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
          content="Premium roof, idea, design, construction and maintenance of roof"
        />
      </Head>
      <HeadTitle />
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <RoofConfigurator />
        <RoofMaintenance />
        <AboutUs />
        <WhyWe />
        <Gallery />
        <CallToAction />
        <Footer />
      </div>
    </Fragment>
  );
}
