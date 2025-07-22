import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Video from './components/Video';
import Post from './components/Post';
import LogoSection from './components/LogoSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Video />
        <Post />
        <LogoSection />
      </main>
      <Footer />
    </>
  );
}