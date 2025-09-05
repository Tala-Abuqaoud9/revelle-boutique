import Header from '@/components/Header';
import Hero from '@/components/HeroSection';
import ImagesGallery from '@/components/ImagesGallery';
import NewInSection from '@/components/Features/newInSection';
export default function HomePage() {
  return (
    <>
      <div>
        <Header />
        <Hero />
      </div>
        <ImagesGallery />
        <NewInSection />
    </>
  );
}