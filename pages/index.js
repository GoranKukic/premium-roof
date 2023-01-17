import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import RoofConfigurator from '../components/RoofConfigurator/RoofConfigurator';
import RoofMaintenance from '../components/RoofMaintenance/RoofMaintenance';
import AboutUs from '../components/AboutUs/AboutUs';
import WhyWe from '../components/WhyWe/WhyWe';
import Gallery from '../components/Gallery/Gallery';
import CallToAction from '../components/CallToAction/CallToAction';
import Footer from '../components/Footer/Footer';
import { Fragment } from 'react';
import HeadTitle from '../components/HeadTitle/HeadTitle';
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
