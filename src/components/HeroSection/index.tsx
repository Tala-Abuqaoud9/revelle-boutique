"use client";
import Container from "@/components/Container";
import Title from "../Title";
import Paragraph from "../Pargraph";
import Button from "@/components/Buttons/Button";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 w-full h-full py-20 flex flex-col items-center text-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
        src="/video/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <Container className="relative z-10 text-center">
        <Title className="mb-4 max-w-3xl">
          Discover Your Style with Revelle Boutique
        </Title>
        <Paragraph className="text-bold mb-8">
          Exclusive collections crafted with passion and care.
        </Paragraph>
        <Button
          label="Shop Now"
          variant="primary"
          className="px-8 py-3 rounded-md"
        />
      </Container>
    </section>
  );
}
