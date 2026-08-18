import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Location from './components/Location'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'

const Journey = lazy(() => import('./components/Journey'))

export default function App() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className="h-svh bg-forest-deep" aria-hidden />}>
          <Journey />
        </Suspense>
        <Rooms />
        <Amenities />
        <Location />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
