import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [name, setName] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [isMuted, setIsMuted] = useState(true);

  // Handle submitting name
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName.trim()) {
      setName(userName.trim());
    }
  };

  // Handle mute/unmute
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    const audio = document.getElementById("background-music") as HTMLAudioElement;
    if (audio) {
      audio.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      <Head>
        <title>Holiday Greeting</title>
      </Head>
      <audio id="background-music" autoPlay loop>
        <source src="/holiday-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="relative h-screen bg-blue-800 flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Snow animation */}
        <div className="absolute top-0 left-0 w-full h-full snow-animation"></div>

        {/* Name prompt */}
        {!name ? (
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Hello, Friend!</h1>
            <p className="text-md md:text-lg mb-6">Enter your name to get started!</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <input
                type="text"
                placeholder="Enter your name..."
                className="px-4 py-2 rounded-md text-gray-800 mb-4 w-64 md:w-80"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-md font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          // Animated lines
          <div className="flex flex-col items-center space-y-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">Hello, {name}!</h1>
            <p className="text-lg md:text-xl fade-in">"You've been a good companion to me, {name}."</p>
            <p className="text-lg md:text-xl fade-in delay-1">
              "Your dedication and support have made me surpass my limitations as a person."
            </p>
            <p className="text-lg md:text-xl fade-in delay-2">
              "Wishing you peace, joy, and laughter this holiday season."
            </p>
            <p className="text-lg md:text-xl fade-in delay-3">
              "Have a magical holiday season, {name}!"
            </p>
          </div>
        )}

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 p-3 bg-gray-600 hover:bg-gray-700 rounded-full"
        >
          {isMuted ? "Unmute 🎵" : "Mute 🔇"}
        </button>
      </div>
    </>
  );
}
