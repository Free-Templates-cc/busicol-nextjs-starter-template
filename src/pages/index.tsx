import Head from 'next/head'
import Raw from '../components/Raw';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import Services from '@/components/Services';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Counter from '@/components/Counter';
import About2 from '@/components/About2';
import FinancialSolution from '@/components/FinancialSolution';
import Testimonial from '@/components/Testimonial';
import Project from '@/components/Project';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>BusiCol Nextjs Starter Template</title>
        <meta name="description" content="BusiCol Nextjs Starter Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slider />
      <Services />
      <About />
      <Counter />
      <Gallery />
      <About2 />
      <FinancialSolution />
      <Testimonial />
      <Project />
      <Footer />
    </>
  )
}
