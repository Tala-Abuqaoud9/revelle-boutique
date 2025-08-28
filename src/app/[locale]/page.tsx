import Header from '@/components/Header';
import Hero from '@/components/HeroSection';
import ImagesGallery from '@/components/ImagesGallery';
export default function HomePage() {
  return (
    <>
      <div>
        <Header />
        <Hero />
      </div>
      <div>
          <ImagesGallery />
      </div>
    </>
  );
}