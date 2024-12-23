import SnowAnimation from '../components/SnowAnimation';

export default function Home() {
  return (
    <div className="relative h-screen w-screen bg-blue-900 flex items-center justify-center text-center text-white overflow-hidden">
      {/* Snow Animation */}
      <SnowAnimation />

      {/* Greeting Text */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-pulse">
          Hello, Friend!
        </h1>
        <p className="text-lg md:text-2xl">
          Wishing you a magical holiday season!
        </p>
      </div>
    </div>
  );
}
